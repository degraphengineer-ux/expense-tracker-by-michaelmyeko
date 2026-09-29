// ==========================================
// SPENDWISE: JAVASCRIPT FOUNDATION (WEEK 5)
// By Michael Myeko
// ==========================================

// 1. Store Application Data (Variables & Data Types)
let accountHolder = "Michael";
let totalBudget = 1200.00; // Number (Float)
let totalExpenses = 285.00; // Number (Float)
let isBudgetActive = true; // Boolean

// Array to store expense objects
let expensesList = [
  { name: "Groceries", amount: 150.00, category: "Food" },
  { name: "Bus Fare", amount: 25.00, category: "Transport" },
  { name: "Monthly Rent", amount: 800.00, category: "Rent" }
];

// 2. Reusable Functions for Calculations
// Function to calculate remaining balance
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

// Function to calculate total expenses dynamically from an array
function calculateTotalExpenses(expensesArray) {
  let sum = 0;
  for (let i = 0; i < expensesArray.length; i++) {
    sum += expensesArray[i].amount;
  }
  return sum;
}

// Function to display formatted financial summary in the browser console
function displayFinancialSummary(user, budget, expenses) {
  let remaining = calculateRemainingBalance(budget, expenses);
  
  console.log("==========================================");
  console.log(` 📊 SPENDWISE FINANCIAL REPORT FOR: ${user}`);
  console.log("==========================================");
  console.log(`Total Starting Budget : $${budget.toFixed(2)}`);
  console.log(`Total Tracked Expenses: $${expenses.toFixed(2)}`);
  console.log(`Remaining Balance     : $${remaining.toFixed(2)}`);
  console.log("Status: " + (remaining >= 0 ? "You are within budget! 👍" : "Warning: Over budget! ⚠️"));
  console.log("==========================================");
}

// 3. Collect User Input (Interactive Prompt)
function promptUserForExpense() {
  let userInputName = prompt("Enter new expense name:");
  
  if (userInputName) {
    let userInputAmount = prompt("Enter expense amount ($):");
    let parsedAmount = parseFloat(userInputAmount);

    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      // Add new expense to our list
      expensesList.push({ name: userInputName, amount: parsedAmount, category: "General" });
      
      // Recalculate total expenses
      totalExpenses = calculateTotalExpenses(expensesList);
      
      console.log(`✅ Successfully added expense: ${userInputName} ($${parsedAmount.toFixed(2)})`);
      
      // Display updated summary
      displayFinancialSummary(accountHolder, totalBudget, totalExpenses);
    } else {
      console.log("❌ Invalid amount entered. Please enter a valid number.");
    }
  } else {
    console.log("ℹ️ Expense entry cancelled.");
  }
}

// Execute initial report on page load
displayFinancialSummary(accountHolder, totalBudget, totalExpenses);

// Uncomment the line below if you want the prompt to trigger automatically when the page opens:
// promptUserForExpense();
