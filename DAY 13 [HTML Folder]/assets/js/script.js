// Basic JavaScript for our HTML Folder Structure example

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded successfully!");

  // Add a simple interaction to demonstrate JavaScript functionality
  const heading = document.querySelector("h1");
  if (heading) {
    heading.addEventListener("click", function () {
      alert("You clicked the heading!");
    });
  }

  // Add a message about folder structure
  console.log("This JavaScript file is linked from multiple HTML files");
  console.log(
    "This demonstrates how to organize JavaScript in a separate folder"
  );

  // Get the current page name
  const path = window.location.pathname;
  const page = path.split("/").pop();

  console.log("You are currently viewing: " + page);
});

// This JavaScript file demonstrates how to link to JS from different HTML files
// located in different folders using relative paths
