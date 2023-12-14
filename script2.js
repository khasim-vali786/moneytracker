// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Initialize transactions from local storage or set an empty array
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    updateBalance();
    displayTransactions();

    // Function to add a new transaction
    window.addTransaction = function () {
        const amount = parseFloat(document.getElementById('amount').value);
        const type = document.getElementById('type').value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const transaction = {
            amount,
            type,
            date: new Date().toLocaleDateString(),
        };

        // Add the new transaction to the array
        transactions.push(transaction);

        // Update local storage
        localStorage.setItem('transactions', JSON.stringify(transactions));

        // Update the UI
        updateBalance();
        displayTransactions();
    };

    // Function to update the balance
    function updateBalance() {
        const balanceElement = document.getElementById('balance');
        const balance = calculateBalance();
        balanceElement.textContent = balance.toFixed(2);
    }

    // Function to calculate the balance
    function calculateBalance() {
        return transactions.reduce((total, transaction) => {
            return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
        }, 0);
    }

    // Function to display transactions
    function displayTransactions() {
        const transactionListElement = document.getElementById('transactionList');
        transactionListElement.innerHTML = '';

        transactions.forEach(transaction => {
            const transactionItem = document.createElement('div');
            transactionItem.classList.add('transaction-item');

            transactionItem.innerHTML = `
                <p>${transaction.date}</p>
                <p>${transaction.type === 'income' ? '+' : '-'}$${transaction.amount.toFixed(2)}</p>
            `;

            transactionListElement.appendChild(transactionItem);
        });
    }
});
