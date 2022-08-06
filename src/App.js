import './App.css';
import { useState } from 'react'
import ComponentNavBar from './Components/ComponentNavBar';
import { Routes, Route } from 'react-router-dom'
import NewPost from './Pages/NewPost'

function App() {
  
  return (
    <div className="App">
      <header>
      <div>
      <ComponentNavBar/>
      </div>
      </header>
      <main>
        <div className="container">
         <Routes>
            <Route path = '/' element = {<h1>Página de prueba</h1>} />
            <Route path = '/post-list' element = {<h1>Post List</h1>} />
            <Route path = '/post-detail' element = {<h1>Post Detail</h1>} />
            <Route path = '/new-post' element = {<NewPost/>} />
         </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
