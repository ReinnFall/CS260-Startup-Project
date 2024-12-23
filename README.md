# CS260-Startup-Project
My goal in this startup is to make a working string generator for popular mobile game Pokemon Go.

## Specification Deliverable

### Elevator Pitch
If you have ever played Pokemon Go, you know how fun it is to catch and collect your favorite creatures. You also know how tedious and time consuming it can be to sort through your hundreds of Pokemon. With this website you will be able to skip that agonizing part and get right back to playing. This website will give you  the ability to quickly create, save and copy other's seach strings.

### Key Features
- Ability to create general search strings that include commonly used filters such as:
  - Shiny
  - Legendary
  - Mythical
  - Traded
  - Lucky
  - Dynamax
  - Gigantamax
  - Purified
  - Shadow
  - 4 Star
  - 3 Star
  - Hatched
- Ability to create very specific transfer commands (pick specifically which pokemon to include in each string)
- Ability to save your strings on a personal profile
- Ability to view strings others have made and be able to save/copy them

### Technologies
I am going to use the required technologies in the following ways:

- **HTML** - My project will include 3 pages:
  - Custom StringBuilder Page
  - Frequently Used String Page
  - Personal Profile Page
- **CSS** - My website will contain many  buttons that control filters for the string output. My CSS will make these buttons look pleasing to the eye.
- **Javascript/React** - My filter buttons will be given functionailty and interactivty with the user while they build their string. These buttons will remain in an on/off state until the generate string button is clicked. I'd also like to be able to invert a button by double-clicking it.
- **Web-Service** - In the Frequently Used page, I will call on another webpage that contains information on recent Pokemon Go events to be able to generate relevant and useful strings.
- **Authentication** - My website will include the ability to log in. 
Each profile will have the ability to save strings they have created or strings others have created.
- **Database Data** - Any string that is created and saved will be stored in the websites database.
- **Websocket Data** - On the Frequently Used page, users have the ability to see strings that others have shared.

### HTML Startup
**Things Added** 
- Index
  - Navigation bar in header
  - Placemarker for login credentials
  - Title
  - All necessary buttons I want to use to generate a string
  - Link to github at the bottom
- Find Strings Page
  - Navigation bar in header
  - Placemarker for login credentials
  - Placemarker for potential strings users may want to add
    - Buttons to copy the strings
    - This is where 3rd party calls will take place (new strings for relevant game events)
    - Websocket technology will also go here as strings from over users will populate the Recently Used Strings
  - Link to github at the bottom
- Profile
  - Navigation bar in header
  - Placemarker for login credentials
  - Placemarker for all saved strings to the user
    - Copy, share, and edit buttons included (not implemented)
    - This is where the database will hold specific information for each user
  - Link to github at the bottom

### CSS Startup
**Things Added** 
- All pages share the same header and footer
  - Added a different login type
  - Adjusts to resizing
- Index
  - Added placeholders for my custom buttons. I tried fully implementing them with CSS but I was told by a TA that it would probably be better to wait for React. So for now I've added the images I want for them and the place I want them (not including Dynamax and Gigantmax)
  - I will also be adding images of every Pokemon, but thought it would be wise to have the checkbox done before adding it.
  - Bootstraped my buttons including a copy button
  - Used CSS to color, organize and style my page
- FindStrings and Profile
  - Added bootstrap to buttons
  - Used CSS to color, organize and style my page





![StringBuilderSketch](images/StringBuilder.jpg)

![FrequentlyUsedSketch](images/FrequentlyUsed.jpg)

![SavedStringsSketch](images/SavedStrings.jpg)

