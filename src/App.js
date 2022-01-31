import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import './App.css';
import TeamDetail from './views/TeamDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/team/:id' element={<TeamDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
