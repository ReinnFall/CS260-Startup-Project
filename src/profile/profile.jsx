import React from 'react';
import './profile.css';
import { main } from '@popperjs/core';

export function Profile() {
  return (
    <main>
      <div class="string_item">
                <p><u>Saved Strings</u></p>
                <ul>
                    <li> Nundo
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" class="btn btn-outline-primary copyB"/>
                            <i class="bi bi-files"></i> 
                        <button id="shareButton" class="btn btn-outline-primary">Share</button>
                        <button id="editButton" onclick="window.location.href='index.html';" class="btn btn-outline-primary">Edit</button>
                    </li>
                </ul>
                <ul>
                    <li> PVP 0 attack
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" class="btn btn-outline-primary copyB"/>
                            <i class="bi bi-files"></i> 
                        <button id="shareButton" class="btn btn-outline-primary">Share</button>
                        <button id="editButton" onclick="window.location.href='index.html';" class="btn btn-outline-primary">Edit</button>
                    </li>
                </ul>
                <ul>
                    <li> OptionSelect
                        <input type="text" value="desired string" id="inputBar"/>
                        <button id="copyButton" class="btn btn-outline-primary copyB"/>
                            <i class="bi bi-files"></i> 
                        <button id="shareButton" class="btn btn-outline-primary">Share</button>
                        <button id="editButton" onclick="window.location.href='index.html';" class="btn btn-outline-primary">Edit</button>
                    </li>
                </ul>
            </div>
    </main>
  );
}