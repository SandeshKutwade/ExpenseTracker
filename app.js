const expenseForm = document.getElementById("expenseForm");
expenseForm.addEventListener("submit",function(event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;
    const catagory = document.getElementById("category").value;

    const expense = {
        amount: amount,
        description:description,
        catagory: catagory
    };

    console.log(expense)
})


// till here we achive form submission / preventing page to refresh or redirect or reload / 
// collect all the values from HTML and print them on console 

// till above step we just collect a 3 separate values but eventually we will come up with many values / expenses. 
// example - expense 1 , expense 2 , expesne 3 etc 
// and to handle above things we need a clear one complete expense and for that we relays on objects  and for  that we update above 
//  console.log(amount)
    // console.log(description)
    // console.log(catagory)



