
let totalBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
const currencySymbol = "KES";

const expensesList = [];


const displayBudget = document.getElementById("display-budget");
const displaySpent = document.getElementById("display-spent");
const displayBalance = document.getElementById("display-balance");
const balanceCard = document.getElementById("balance-card");
const statusMessage = document.getElementById("status-message");
const expenseListContainer = document.getElementById("expense-list");

function recalculateFinancialMetrics() {
    let trackingSum = 0;
  
    for (let i = 0; i < expensesList.length; i++) {
        trackingSum += expensesList[i].amount;
    }

    totalExpenses = trackingSum;
    remainingBalance = totalBudget - trackingSum;

    // Trigger visual processing updates
    updateDashboardUI();
}

function updateDashboardUI() {
  
    displayBudget.textContent = `${totalBudget.toFixed(2)} ${currencySymbol}`;
    displaySpent.textContent = `${totalExpenses.toFixed(2)} ${currencySymbol}`;
    displayBalance.textContent = `${remainingBalance.toFixed(2)} ${currencySymbol}`;

    
    balanceCard.className = "card";

  
    if (totalBudget === 0) {
        balanceCard.classList.add("status-neutral");
        statusMessage.textContent = "Set your allocation parameters to begin";
    } else if (remainingBalance < 0) {
        balanceCard.classList.add("status-danger");
        statusMessage.textContent = "Overspending Alert: Limit exceeded!";
    } else if (remainingBalance === 0) {
        balanceCard.classList.add("status-warn");
        statusMessage.textContent = " Critical Alert: Exactly 0.00 remaining.";
    } else if (remainingBalance <= totalBudget * 0.2) {
      
        balanceCard.classList.add("status-warn");
        statusMessage.textContent = "Notice: Low funds warning (< 20% left).";
    } else {
        balanceCard.classList.add("status-ok");
        statusMessage.textContent = "Standing Clear: Safe financial margin.";
    }
}


function renderExpenseListView() {
    
    expenseListContainer.innerHTML = "";

    
    expensesList.forEach(function(item) {
        
        const li = document.createElement("li");
        
        li.innerHTML = `
            <span><strong>${item.description}</strong></span>
            <span class="cost-tag">-${item.amount.toFixed(2)} ${currencySymbol}</span>
        `;
        
        
        expenseListContainer.appendChild(li);
    });
}

document.getElementById("set-budget-btn").addEventListener("click", function() {
    const budgetInput = document.getElementById("budget-input");
    const parsedValue = parseFloat(budgetInput.value);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        alert("Please enter a valid positive numerical allocation threshold.");
        return;
    }

    totalBudget = parsedValue;
    budgetInput.value = ""; 
    
    recalculateFinancialMetrics();
});

document.getElementById("add-expense-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("expense-name");
    const amountInput = document.getElementById("expense-amount");
    
    const inputDescription = nameInput.value.trim();
    const inputAmount = parseFloat(amountInput.value);

    if (inputDescription === "" || isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid non-empty description title and accurate expense cost.");
        return;
    }

    expensesList.push({
        description: inputDescription,
        amount: inputAmount
    });

    nameInput.value = "";
    amountInput.value = "";

    recalculateFinancialMetrics();
    renderExpenseListView();
});
