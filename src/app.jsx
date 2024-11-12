import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return(
        <><header>
            <nav>
                <a href="index.html">Home</a>
                <a href="findStrings.html">Find Strings</a>
                <a href="profile.html">Profile</a>
            </nav>
            <div className="login">Login:
                <form method="get" action="profile.html">
                    <label for="name"></label>
                    <input type="text" id="name" placeholder="Your name here" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </header> 
        <main> All app components</main>
        <footer>
            <a href="https://github.com/ReinnFall/CS260-Startup-Project.git">Github - James Stock</a>
        </footer>
        </>
    );
}