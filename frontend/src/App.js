import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from "react";

import UserList from './components/userList.js';
import AddUser from "./components/AddUser.js"
import EditUser from './components/EditUser.js';

function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <UserList/>} />
          <Route path="add" element={ <AddUser/>} />
          <Route path="edit/:id" element={ <EditUser/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
