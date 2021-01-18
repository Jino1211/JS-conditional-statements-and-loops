
for (let i = 1; i <= 100; i++) {
    let board = "";
    if (i%3 === 0) {
        board += "Fizz";
    }
    if (i%5 === 0) {
        board += "Buzz";
    }
    console.log(board || i);
}