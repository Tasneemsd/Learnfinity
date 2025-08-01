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

// ✅ CORS for both local & deployed frontend
app.use(cors({
  origin: ['http://localhost:5173', 'https://learnfinity-theta.vercel.app'],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (profile images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Connect to MongoDB
mongoose.connect(MongoDB_Url)
  .then(() => console.log(`✅ MongoDB connected at ${MongoDB_Url}`))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Multer image upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });


// ✅ REGISTER ROUTE
app.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ error: "Username already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
      profileImage: req.file ? req.file.filename : null
    });

    await newUser.save();

    res.status(201).json({
      message: "Registered Successfully",
      username: newUser.username,
      profileImage: newUser.profileImage
    });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});


// ✅ LOGIN ROUTE
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, name: user.username },
      process.env.Secret_key || 'secret',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      id: user._id,
      name: user.username,
      profileImage: user.profileImage
    });
  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});


// ✅ PROTECTED HOME ROUTE
app.get('/home', authMiddleware, (req, res) => {
  res.json({
    message: `Welcome, ${req.user.name}`,
    profileImage: req.user.profileImage
  });
});
// Backend: Add this route
app.get('/api/data', (req, res) => {
  res.json({ message: "Sample Data" });
});


// ✅ RUN SERVER
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
