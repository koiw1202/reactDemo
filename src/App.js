import React from 'react'
import Home from './pages/Home'
import {Routes, Route, Link} from 'react-router-dom'
import About from './pages/About'
import Content from './pages/Content'
import Input from './pages/Input'
import Input2 from './pages/Input2'
import UserList from './pages/Lists'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="/about">About</Link> | 
        <Link to="/Counter">Counter</Link> | 
        <Link to="/Input">Input</Link> |
        <Link to="/Input2">Input2</Link> |
        <Link to="/Lists">UserList</Link> |

        <Content />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Counter" element={<Input />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Input2" element={<Input2 />} />
        <Route path="/Lists" element={<UserList />} />
      </Routes>
      
    </div>
  );
}

export default App;
