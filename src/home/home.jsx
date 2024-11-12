import React from 'react';

export function Home() {
  return (
    <main>
      <div>
      <h1>Pokemon Go StringBuilder</h1>
        {/*}    <div class="stringbuilder">
                 
                <button id = "Generate String Button" class="btn btn-outline-primary generateB"> Generate String</button>

                <input class="stringbar" type="text" value="Copy this text" id="inputBar"/>

               
                <button id="copyButton" class="btn btn-outline-primary copyB">
                    <i class="bi bi-files"></i> 
                </button>
            </div>
            <table class="string_modifiers_table">
                <tr>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox shiny" style="background-image: url('images/shiny.png');"></button>
                        <div class="search_title">Shiny</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class= "custom_checkbox legendary" style="background-image: url('images/raid.png');"></button>
                        <div class="search_title">Legendary</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox mythical" style="background-image: url('images/mythical.png');"></button>
                        <div class="search_title">Mythical</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox lucky" style="background-image: url('images/lucky.png');"></button>
                        <div class="search_title">Lucky</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox traded" style="background-image: url('images/traded.png');"></button>
                        <div class="search_title">Traded</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox shadow" style="background-image: url('images/shadow.png');"></button>
                        <div class="search_title">Shadow</div>
                    </div>
                </td>
                </tr>
                
                <tr>
                
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox purified" style="background-image: url('images/purified.png');"></button>
                        <div class="search_title">Purified</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox dynamax"></button>
                        <div class="search_title">Dynamax</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox Gigantamax"></button>
                        <div class="search_title">Gigantamax</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox 4star" style="background-image: url('images/4*.png');"></button>
                        <div class="search_title">4*</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox 3star" style="background-image: url('images/3*.png');"></button>
                        <div class="search_title">3*</div>
                    </div>
                </td>
                <td>
                    <div class="button_and_title"> 
                        <button class="custom_checkbox hatched" style="background-image: url('images/hatched.png');"></button>
                        <div class="search_title">Hatched</div>
                    </div>
                </td>
                </tr>
            </table>
            <div>
                <div class="gen_title">Kanto</div>
                <button id="revealButton" class="btn btn-outline-primary">Show All</button>
                <button id="selectAllButton" class="btn btn-outline-primary">Select All</button>
            </div>

            
            <table id="KantoTable" class="gen_table">
                <tbody>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Bulbasaur</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Ivysaur</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Venusaur</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Charmander</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Charmeleon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Charizard</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Squirtle</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Wartortle</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Blastoise</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Caterpie</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Metapod</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Butterfree</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Weedle</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Kakuna</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Beedrill</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Pidgey</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Pidgeotto</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Pidgeot</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Rattata</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Raticate</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Spearow</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Fearow</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Ekans</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Arbok</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Pikachu</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Raichu</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Sandshrew</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Sandslash</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Nidoran♀</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Nidorina</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Nidoqueen</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Nidoran♂</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Nidorino</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Nidoking</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Clefairy</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Clefable</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Vulpix</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Ninetales</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Jigglypuff</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Wigglytuff</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Zubat</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Golbat</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Oddish</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Gloom</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Vileplume</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Paras</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Parasect</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Venonat</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Venomoth</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Diglett</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Dugtrio</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Meowth</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Persian</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Psyduck</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Golduck</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Mankey</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Primeape</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Growlithe</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Arcanine</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Poliwag</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Poliwhirl</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Poliwrath</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Abra</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Kadabra</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Alakazam</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Machop</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Machoke</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Machamp</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Bellsprout</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Weepinbell</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Victreebel</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Tentacool</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Tentacruel</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Geodude</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Graveler</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Golem</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Ponyta</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Rapidash</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Slowpoke</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Slowbro</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Magnemite</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Magneton</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Farfetch'd</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Doduo</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Dodrio</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Seel</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Dewgong</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Grimer</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Muk</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Shellder</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Cloyster</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Gastly</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Haunter</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Gengar</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Onix</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Drowzee</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Hypno</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Krabby</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Kingler</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Voltorb</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Electrode</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Exeggcute</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Exeggutor</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Cubone</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Marowak</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Hitmonlee</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Hitmonchan</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Lickitung</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Koffing</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Weezing</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Rhyhorn</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Rhydon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Chansey</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Tangela</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Kangaskhan</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Horsea</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Seadra</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Goldeen</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Seaking</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Staryu</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Starmie</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Mr. Mime</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Scyther</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Jynx</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Electabuzz</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Magmar</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Pinsir</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Tauros</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Magikarp</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Gyarados</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Lapras</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Ditto</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Eevee</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Vaporeon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Jolteon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Flareon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Porygon</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Omanyte</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Omastar</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Kabuto</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Kabutops</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Aerodactyl</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Snorlax</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Articuno</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Zapdos</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Moltres</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Dratini</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Dragonair</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Dragonite</input></label></td>
                        <td><label><input type="checkbox" class="checkbox">Mewtwo</input></label></td>
                    </tr>
                    <tr>
                        <td><label><input type="checkbox" class="checkbox">Mew</input></label></td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    </main>
  );
}