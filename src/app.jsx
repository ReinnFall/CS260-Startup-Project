import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { FindStrings } from './findStrings/findStrings';
import { Profile } from './profile/profile';



export default function App() {
    return(
        <>
        <BrowserRouter>
            <div className='body'>
            <header>
                <nav>
                    <NavLink className = 'nav-link' to ="">Home</NavLink>
                    <NavLink className = 'nav-link' to ="findStrings">FindStrings</NavLink>
                    <NavLink className = 'nav-link' to ="profile">Profile</NavLink>
                </nav>
                <div className="login">Login:
                    <form method="get" action="profile.html">
                        <label for="name"></label>
                        <input type="text" id="name" placeholder="Your name here" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </header> 
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/findStrings' element={<FindStrings />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <footer>
                <a href="https://github.com/ReinnFall/CS260-Startup-Project.git">Github - James Stock</a>
            </footer>
            </div>
        </BrowserRouter>
        </>
    );
}
function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }