// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and note list elements
    const form = document.querySelector("form");
    const noteList = document.getElementById("note-list");
  
    // Add an event listener to the form's submit event
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the values from the form inputs
      const title = document.getElementById("Notetitle").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const note = document.getElementById("note").value;
  
      // Create a new note element
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>${note}</p>
      `;
  
      // Append the new note to the note list
      noteList.appendChild(noteElement);
  
      // Reset the form
      form.reset();
    });
  });
  