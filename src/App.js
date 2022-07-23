import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>

      <div>
        <Link to="/" >Home</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <Container customClass="min-height">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Container>

      <p>Footer</p>

    </Router>
    
  );
}

export default App;
