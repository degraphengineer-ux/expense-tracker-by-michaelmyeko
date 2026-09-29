// ==========================================
// SPENDWISE: INTERACTIVITY (WEEK 6)
// By Michael Myeko
// ==========================================

// 1. Data Storage: Array of Objects
let expenses = [
  { name: "Groceries", amount: 150.00, category: "Food" },
  { name: "Bus Fare", amount: 25.00, category: "Transport" }
];

let monthlyBudget = 1000.00; // Simulated budget for conditional logic

// DOM Elements Selection
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const addExpenseBtn = document.querySelector('.add-expense-section button');
const tableBody = document.querySelector('.expense-table tbody');
const headerText = document.querySelector('.dashboard-header p');

// 2. Process Data with Loops & Update the DOM Dynamically
function renderDashboard() {
  // Clear the existing static table rows
  tableBody.innerHTML = '';
  
  let totalSpent = 0;

  // Loop through the expenses array to build table rows dynamically
  for (let i = 0; i < expenses.length; i++) {
    let currentExpense = expenses[i];
    totalSpent += currentExpense.amount;

    // Create a new table row element
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${currentExpense.name}</td>
      <td>$${currentExpense.amount.toFixed(2)}</td>
      <td>${currentExpense.category}</td>
    `;
    
    // Append the new row to the table body
    tableBody.appendChild(tr);
  }

  // 3. Implement Decision Making (Conditionals) for Budget Feedback
  let remainingBalance = monthlyBudget - totalSpent;
  
  if (totalSpent > monthlyBudget) {
    headerText.innerHTML = `Welcome back, Michael! ⚠️ <strong>Warning:</strong> You are over budget by $${Math.abs(remainingBalance).toFixed(2)}!`;
    headerText.style.color = "red";
  } else {
    headerText.innerHTML = `Welcome back, Michael! You have <strong>$${remainingBalance.toFixed(2)}</strong> left in your budget this month.`;
    headerText.style.color = "inherit";
  }
}

// 4. Handle User Interactions (Event Listeners)
addExpenseBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the form from refreshing the page
  
  let nameValue = nameInput.value.trim();
  let amountValue = parseFloat(amountInput.value);
  let categoryValue = categoryInput.value;

  // Conditional: Validate user input
  if (nameValue === "" || isNaN(amountValue) || amountValue <= 0) {
    alert("Please enter a valid expense name and a positive amount.");
    return; // Stop the function if validation fails
  }

  // Add the new expense to our array
  expenses.push({
    name: nameValue,
    amount: amountValue,
    category: categoryValue
  });

  // Clear the input fields for the next entry
  nameInput.value = '';
  amountInput.value = '';

  // Re-render the dashboard to show the new expense
  renderDashboard();
});

// 5. Initial Render on Page Load
renderDashboard();
