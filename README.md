h jghhhh

# Note-Taker-Express

## Description

### Problem: 

As a small business owner, it can be challenging to keep track of important tasks and thoughts. Jotting down notes on paper can be disorganized and easily lost. Without a reliable system in place, important information can slip through the cracks, resulting in missed opportunities and tasks left undone.

### Solution:

To address the challenge of disorganized thoughts and tasks for small business owners, I have created a note-taking application that offers an effective and dependable solution. Here's an overview of how I achieved this:

1. Designed a landing page using HTML and CSS, which includes a link to the notes page.
2. Developed a functional notes page using vanilla JavaScript, HTML, and CSS. The left-hand column displays existing notes, while the right-hand column provides 3. empty fields for new notes.
4. Employed JavaScript's native state management capabilities to handle user input and store new notes.
5. Incorporated a save icon in the navigation bar at the top of the page, which appears when a new note is entered. This allows users to save their notes to a JSON file.
6. Implemented an Express router to facilitate smooth navigation between the landing page and notes page.

By following these steps, I successfully developed a note-taking application that equips small business owners with a straightforward yet powerful means to organize their thoughts and tasks. This solution provides a reliable and efficient system for note-taking, enabling users to save, manage, and reference their notes effortlessly.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Demo Video](#demo)
- [License](#license)
- [Questions?](#quest)

## Overview 

The application is organized into several files and folders:

* The db folder contains a JSON file that stores information about the notes that the user wants to save, including the title and body of the note.

* The helpers folder contains a uuid.js file that exports a function to generate a unique ID for each note. This helper function is used in server.js to assign a unique ID to each note.

* The public folder contains the HTML files for the landing page and the notes page of the application. The assets folder inside the public folder contains the CSS and JS files for styling and functionality of the application.

* The server.js file in the main directory uses Express.js to handle the routes for the application, including creating and deleting notes.

The application allows small business owners to write and save notes, organize their thoughts, and keep track of tasks they need to complete. Users are presented with a landing page with a link to the notes page. Clicking on the link takes them to a page with existing notes listed in the left-hand column, and empty fields to enter a new note title and text in the right-hand column. Saving a note triggers the note to be saved and appear in the left-hand column with other existing notes. Clicking on an existing note in the list shows the note in the right-hand column. The user can also delete notes. The unique IDs assigned to each note allow the application to accurately delete and modify individual notes.

Overall, this note taker application provides a simple and efficient way for small business owners to write and store notes, helping them stay organized and on top of their tasks.

## Installation 

Before running this project, instialize it locally using npm:

```
npm install
```

## Usage

You can run the application using the command: 

```
npm start
```

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/213598624-317a7008-d823-46bf-8bc4-dea7bc5be096.png)

## Deployed Application

<a href="https://fierce-spire-62517.herokuapp.com/">Note Taker</a> 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<pre>
The MIT License

© Colin McMurtray University at North Carolina Chapel Hill Coding Bootcamp MIT License Copyright (c) 2023 Permission is hereby granted, free of charge, to 
any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
</pre>

## Questions? <a name="quest"></a>

If you have any questions, please reach out to me using one of the following:

- [Email](mailto:mcmurtraycolin@gmail.com)
- [GitHub Profile](https://github.com/codingColinMcM)

