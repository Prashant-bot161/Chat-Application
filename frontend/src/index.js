import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes} from "react-router-dom";
import './css/index.css';
import Login from './pages/login'
import Lobby from './pages/lobby'
import JoinLobby from './pages/joinLobby'
import CreateLobby from './pages/createLobby'
import Chat from './pages/chat'
import RegisterUser from './pages/registerUser'
import ForgetPassword from './pages/forgetPass'
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/lobby/" element={<Lobby/>} />
      <Route path="/joinLobby/" element={<JoinLobby/>} />
      <Route path="/createLobby/" element={<CreateLobby/>} />
      <Route path="/registerUser/" element={<RegisterUser/>} />
      <Route path="/forgetPass/" element={<ForgetPassword/>} />
      <Route path="/chat/" element={<Chat/>} />
    </Routes>
    </Router>
  );
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
