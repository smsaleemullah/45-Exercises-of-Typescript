// Array of Current Users
let Current_users = ["Unzila", "Maryam", "Shumaila", "Saleem", "Fatima"]

// Array of New Users
let new_users = ["Saif", "Sami", "Ahad Mustafa", "Saleem", "Shumaila"]

// Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {

    //  Making a Condition for username already exist and save in our_condition variable
    let our_condition = Current_users.some(Current_one_users => Current_one_users.toLowerCase() === new_one_user.toLocaleLowerCase())

    // Print Different message using If_Else statement
    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})