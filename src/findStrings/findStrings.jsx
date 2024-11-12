import React from 'react';
import './findStrings.css';

export function FindStrings() {
  return (
    <main>
      <div className="string_item">
                <p><u>Popular Search Strings</u></p>
                <ul> 
                    <li> Cheap Purifiable Pokemon 
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i className="bi bi-files"></i> 
                        </button>
                    </li>
                    <li> Great/Ultra League Pokemon
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i className="bi bi-files"></i> 
                        </button>
                    </li>
                </ul>
            </div>
            <div className="string_item">
                <p><u>Recently Used Strings</u></p>
                <ul>
                    <li>Jacob recently made "Nundo"
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i class="bi bi-files"></i> 
                        </button>
                    </li>
                    <li> Sarah recently made "Poliwag Check"
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i className="bi bi-files"></i> 
                        </button>
                    </li>
                </ul>
            </div>
            <div className="string_item">
                <p><u>Suggested Strings for Upcoming Events</u></p>
                <ul>
                    <li> Useful string for Sewaddle Community Day
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i className="bi bi-files"></i> 
                        </button>
                    </li>
                </ul>
                <ul> 
                    <li> Useful String for Mega Mawile Raid Day
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" className="btn btn-outline-primary copyB">
                            <i className="bi bi-files"></i> 
                        </button>
                    </li>
                </ul>
            </div>
    </main>
  );
}