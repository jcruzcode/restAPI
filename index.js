const express = require("express");
const app = express();

// const http = require("http"); // imports Node's built-in web server module

// a hardcoded list of notes to convert to JSON format
let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can only execute JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP Protocol",
    important: true,
  },
];

// Default route
app.get("/", (request, response) => {
  response.send("<h1>Good Morning Vietnam!!</h1>");
});

// A route for fetching all notes in collection
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// A route for fetching a single resource (note)
app.get("/api/notes/:id", (request, response) => {
  // Get the id value from the requested endpoint and convert to number
  const id = +request.params.id; 
  // Loop over notes array and look for the element with the id property value
  // that matches the id value given in the requested endpoint
  const note = notes.find(note => note.id === id);
  // Respond to request with note as a JSON formatted string or
  // Respond with status code 404 not found if note is undefined
  return note ? response.json(note) : response.status(404).end("Note Not Found");

})

// /**
//  * Use the createServer method of the http module to create a new web server
//  *
//  * An event handler is registered to the server that is called every time an
//  * HTTP request is made to the server's address http://localhost:3001.
//  *
//  * The request is responded to with the status code 200, with the Content-Type
//  * header set to application/json, and the content of the site to return a
//  * hardcoded list of notes in the JSON format.
//  *
//  **/

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// /*
// The last rows bind the http server assigned to the app variable, to listen to
// HTTP requests sent to port 3001:
// */
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);
