// Task 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it.Call the function.

function makeShirt(size: string, text: string): void{
    console.log(`you order a ${size} shirt that say ${text}`)
}

makeShirt('large','"i like typescript"')
makeShirt('medium','"i need a big shirt"')