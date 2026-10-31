// Personal Expense Tracker
// Your task is to create an array of expenses, calculate the total, find the most expensive expense and calculate the average.

//     Rules:
// - Use functions to perform calculations.
// - Use loops to iterate through your data.
// - Store expenses as objects.
// - Don't use external libraries.
// - Don't use AI-generated solutions.

// Steps:
// 1. Create an array containing at least five expenses.
// 2. Each expense should be an object with name, amount and category.
// 3. Write a function that calculates the total expenses.
// 4. Use a loop to display each expense.
// 5. Write a function that finds the most expensive item.
// 6. Calculate the average expense.
// Expected concepts: Arrays, objects, functions, loops and arithmetic.

// Bonus: Calculate how much money remains from a starting budget of KSh 5,000.

// 
const expenses = [
    { id: 1, name: "Groceries", amount: 850, category: "Food" },
    { id: 2, name: "Transport", amount: 300, category: "Transport" },
    { id: 3, name: "Internet", amount: 1500, category: "Utilities" },
    { id: 4, name: "Lunch", amount: 250, category: "Food" },
    { id: 5, name: "Electricity", amount: 500, category: "Utilities" },
    { id: 6, name: "New Shirt", amount: 1200, category: "Shopping" },
    { id: 7, name: "Movie", amount: 400, category: "Entertainment" },
    { id: 8, name: "House Rent", amount: 4500, category: "Housing" },
    { id: 9, name: "Breakfast", amount: 180, category: "Food" },
    { id: 10, name: "Phone Repair", amount: 2000, category: "Other" }
]



const totalExpense = (expenses) => {
    let numberOfExpense = 0
    let totalExpense = 0
    for (let i = 0; i < expenses.length; i++) {
        numberOfExpense++
        totalExpense += expenses[i].amount
    }

    console.log(`Number of expenses: ${numberOfExpense}`)
    console.log(`Total expenses: ${totalExpense}`)
}

const mostExpensive = () => {
    const expensiveItem = []
    const expensiveAmount = []
    for (let i = 0; i < expenses.length; i++) {
        expensiveItem.push(expenses[i].name)
        expensiveAmount.push(expenses[i].amount)
    }
    return {
        name: expensiveItem,
        amount: expensiveAmount
    }

}

const average = () => {
    let sum = 0
    for (let i = 0; i < expenses.length; i++)
    {
        sum += expenses[i].amount
    }
    return sum / expenses.length    
}


totalExpense(expenses)

const { name, amount } = mostExpensive()

const maxAmount = Math.max(...amount)
const maxIndex = amount.indexOf(maxAmount)
const correspondingName = name[maxIndex]
console.log(`Most expensive expense: ${correspondingName}`)
console.log(`Highest Amount: ${maxAmount}`)
console.log(`Average expense: ${average()}`)