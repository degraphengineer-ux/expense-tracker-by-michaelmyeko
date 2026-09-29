# 💸 SpendWise Dashboard - Interactive Edition

**By Michael Myeko**

A sleek, modern web application designed to help users take control of their finances. This project has been upgraded to feature full interactivity using JavaScript.

## ✨ Week 6 Improvements

This week, SpendWise evolved from a static HTML/CSS layout into a fully interactive web application using JavaScript. Here is how core concepts were implemented:

- **Arrays for Data Storage:** All expense records are now stored centrally in an array of objects (`let expenses = []`), replacing the need for individual disconnected variables.
- **Processing Data with Loops:** A `for` loop iterates through the `expenses` array to dynamically calculate the total amount spent and generate table rows for the UI.
- **Updating the DOM Dynamically:** Using `document.createElement()` and `innerHTML`, the app dynamically updates the expense table and the header greeting text directly on the webpage, replacing static placeholder HTML.
- **User Interactions via Events:** An `addEventListener('click', ...)` is attached to the "Add Expense" button, capturing form data and triggering the DOM updates without reloading the page.
- **Decision Making (Conditionals):** `if/else` statements validate form inputs (preventing empty or negative amounts) and evaluate budget scenarios. If the total expenses exceed the monthly budget, the dashboard dynamically turns the header text red to warn the user.

## 🚧 Challenges Encountered
One challenge was ensuring the page did not refresh when the "Add Expense" button was clicked inside the form. This was resolved by using `event.preventDefault()` inside the event listener to stop the default form submission behavior, allowing the JavaScript logic to execute smoothly.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (DOM Manipulation, Events, ES6)
- **Design:** Custom modern UI with CSS Grid and Flexbox
- **Version Control:** Git & GitHub

## 🚀 Getting Started
1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Fill out the "Add New Expense" form and click the button to see the table and budget summary update dynamically!
