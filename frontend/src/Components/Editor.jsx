import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';
import './../Css/CourseDetail.css';
import { FaUser, FaEnvelope, FaSignOutAlt, FaHome, FaBook, FaQuestion, FaEdit, FaChrome, FaLaptop } from 'react-icons/fa';



function SmartCodeEditor() {
  const [language, setLanguage] = useState('html');
  const [code, setCode] = useState('<h1>Hello World</h1>');
  const [output, setOutput] = useState('');
  const [pyodide, setPyodide] = useState(null);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    if (language === 'python' && !pyodide) {
      window.loadPyodide().then(setPyodide);
    }
  }, [language]);

  useEffect(() => {
    if (['html', 'css', 'javascript'].includes(language)) {
      const htmlCode = language === 'html' ? code : '<h1>Hello World</h1>';
      const cssCode = language === 'css' ? code : '';
      const jsCode = language === 'javascript' ? code : '';

      const timeout = setTimeout(() => {
        setSrcDoc(`
          <html>
            <head><style>${cssCode}</style></head>
            <body>${htmlCode}<script>${jsCode}<\/script></body>
          </html>
        `);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [code, language]);

  const runPython = async () => {
    try {
      let outputText = '';

      pyodide.setStdout({
        batched: (s) => (outputText += s),
      });
      pyodide.setStderr({
        batched: (s) => (outputText += s),
      });

      await pyodide.runPythonAsync(code);
      setOutput(outputText || 'No output');
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
         
      <div className="second">
        <img
          src="../images/lo.png"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginLeft: '80px',
            marginTop: '40px'
          }}
        />
        <Link to="/" className="nav-liis">
          <FaHome /> Home
        </Link>
        <Link to="/courses" className="nav-lii">
          <FaBook /> Courses
        </Link>
        <Link to="/" className="nav-lii">
          <FaQuestion /> Quiz
        </Link>
        <Link to="/edit" className="nav-lii">
          <FaEdit /> Editor
        </Link>
        <Link to="/contact" className="nav-lii">
          <FaEnvelope /> Contact
        </Link>
        <Link to="/profile" className="nav-lii">
          <FaUser /> Profile
        </Link>
        <Link to="/lab" className="nav-lii">
          <FaLaptop /> Lab
        </Link>
        <Link to="/help" className="nav-lii">
          <FaChrome /> Help
        </Link>
        <Link to="/login" className="mainli">
          <FaSignOutAlt /> Logout
        </Link>
      </div>


      <div style={{ flex: 1, padding: '20px' }}>
       
        <div style={{ marginBottom: '10px' ,marginLeft:300 }}>
          <label>Select Language:</label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setCode(getDefaultCode(e.target.value));
              setOutput('');
            }}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', marginLeft:300 }}>
          {/* Editor */}
          <div>
            <Editor
              height="500px"
              width="600px"
              language={language}
              value={code}
              onChange={(value) => setCode(value)}
              theme="vs-dark"
            />
            {language === 'python' && (
              <button
                onClick={runPython}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  background: '#0f172a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                ▶ Run
              </button>
            )}
          </div>

          {/* Output / Preview */}
          <div>
            {language === 'python' ? (
              <div
                style={{
                  marginTop: '10px',
                  background: '#000',
                  color: '#0f0',
                  width: '500px',
                  padding: '10px',
                  fontFamily: 'monospace',
                  borderRadius: '6px',
                }}
              >
                <strong>Output:</strong>
                <pre>{output}</pre>
              </div>
            ) : (
              <div style={{ marginTop: '10px' }}>
                <h4>Live Preview:</h4>
                <iframe
                  srcDoc={srcDoc}
                  title="Preview"
                  sandbox="allow-scripts"
                  width="500px"
                  height="300px"
                  style={{
                    background: 'white',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const getDefaultCode = (lang) => {
  switch (lang) {
    case 'html':
      return '<h1>Hello World</h1>';
    case 'css':
      return 'h1 { color: blue; }';
    case 'javascript':
      return "console.log('Hello from JS');";
    case 'python':
      return 'print("Hello, Python!")';
    default:
      return '';
  }
};

export default SmartCodeEditor;