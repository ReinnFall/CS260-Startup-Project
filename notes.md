# Github Notes
* Use `git status` to list all new or modified files that haven't yet been committed.
* Use a backtick to display code 

# HTML
- `<a href = "link url"> name of link to display </a>`
- `img<src="address" alt="Placeholder Name" width=100>`
- ./deployFiles.sh -k ~/Documents/BYU\ Assignments/2024\ Fall/CS260/GallantGuard475.pem -h pogostringbuilder.click -s startup

## Meta - Viewport
The tag <meta name="viewport" content="width=device-width, initial-scale=1.0"> is used in web development to control how a webpage is displayed on different devices, particularly mobile devices. Here's a breakdown of what it does:

name="viewport":
This tells the browser that the tag is providing instructions on how to control the webpage's viewport, which is the visible area of a webpage on the user’s device.

width=device-width:
This sets the width of the viewport to be equal to the width of the device’s screen. On a mobile phone, for example, this ensures that the webpage fits perfectly to the screen’s width without scaling down unnecessarily.

initial-scale=1.0:
This sets the initial zoom level of the webpage when it is first loaded. An initial scale of 1.0 means that the webpage will be displayed at 100% zoom, neither zoomed in nor out.

You do not want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node_modules in your .gitignore file.