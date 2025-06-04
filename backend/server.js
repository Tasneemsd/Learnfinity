const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const User = require('./models/User');
const authMiddleware = require('./middleware/authmiddleware');

dotenv.config();
const app = express();
const port = process.env.PORT || 4001;
const MongoDB_Url = process.env.MongoDB_Url;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

mongoose.connect(MongoDB_Url)
    .then(() => console.log(`MongoDB connected at ${MongoDB_Url}`))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // save in uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    }
});
const upload = multer({ storage });

app.post('/register', upload.single('profileImage'), async (req, res) => {
    try {
        const { body, file } = req;

        const existingUser = await User.findOne({ username: body.username });
        if (existingUser) {
            return res.status(409).json({ error: "Username already exists" });
        }

        const newUser = new User({
            ...body,
            profileImage: file ? file.filename : null
        });

        await newUser.save();

        res.status(201).json({ 
          message: "Registered Successfully", 
          username: newUser.username, 
          profileImage: newUser.profileImage 
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: "Registration failed" });
    }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'User not found' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1d' });

  res.json({
    token,
    name: user.username,
    profileImage: user.profileImage 
  });
});

app.get('/home', authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.user.name}`, profileImage: req.user.profileImage });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
