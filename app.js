const expenses = [];

const expenseForm = document.getElementById("expenseForm");
const expenseList = document.getElementById("ExpensList")


function displayExpenses() {
    expenseList.innerHTML="";   // here we are clearing the display area. so that the duplicate record wont see

    // clear ----> loop through data ----> rebuild display 

    expenses.forEach(function(expense){ // we have array in obj format so here we uses foreach to travel all the elements one by one
        const expenseItem = document.createElement("div"); // here we are telling to js to create a new div [temp] for the expenses only

        expenseItem.innerHTML =`
        <p>Amount: ₹${expense.amount}</p>
        <p>Description: ${expense.description}</p>
        <p>Category: ${expense.category}</p> 
            
        <hr>
        `; // this is template iteral
        expenseList.appendChild(expenseItem); // takes div which we created and put that inside. 
    });
}


expenseForm.addEventListener("submit",function(event) {
    event.preventDefault();

    const amount = Number(document.getElementById("amount").value);
    const description = document.getElementById("description").value;
    const catagory = document.getElementById("category").value;

    const expense = {
        amount: amount,
        description:description,
        catagory: catagory
    };

    expenses.push(expense);

    // console.log(expense);

    displayExpenses(); // calling function

});



// till here we achive form submission / preventing page to refresh or redirect or reload / 
// collect all the values from HTML and print them on console 

// till above step we just collect a 3 separate values but eventually we will come up with many values / expenses. 
// example - expense 1 , expense 2 , expesne 3 etc 
// and to handle above things we need a clear one complete expense and for that we relays on objects  and for  that we update above 
//  console.log(amount)
    // console.log(description)
    // console.log(catagory)



// we uses the values so even if there a numerical data will also treat as string  and with string format we cant perform calculations 

// even after doing this there is one problem that is as soon as the func completed the values will be desapeears which we dont want
// to handle that we need to record expenses forever  thats array of objects. 

// js array ----> localStorage -----> page refresh -----> js Array -----> didsplay on page 




// what we have build till now --- >

// User --->  HTML form --->  submit Event --->  Get input values --->  create JS object ---> expeses pushes to array format ---> 
// expense becomes list [] ---> displat expenses ---> iterate over all the expeses [foreach] ---> 
// create temp HTML div to show expenses ---> Webpage. 