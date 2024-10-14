import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react'; // Import useState for functional component state management

function App() {
  const apiKey = "69594e73b1a546c78c1c8e687086bd8e";
  
  // State for managing progress bar
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      MY NEWS WEBSITE
      
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" apikey={apiKey} category="general" />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" apikey={apiKey} category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apikey={apiKey} category="entertainment" />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" apikey={apiKey} category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" apikey={apiKey} category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" apikey={apiKey} category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" apikey={apiKey} category="technology" />} />
      </Routes>
    </div>
  );
}

export default App;
