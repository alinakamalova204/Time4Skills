import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Chat from "./pages/Chat";

const App: React.FC = () => {

  return (
      <>
     <header>
         <Link to="/">Home</Link>
         <Link to="/profile">Profile</Link>
         <Link to="/search">Search</Link>
         <Link to="/chat">Chat</Link>
     </header>
      <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/chat" element={<Chat/>} />
      </Routes>
        </>
  )
}

export default App
