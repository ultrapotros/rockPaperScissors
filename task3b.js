function integer(num) {
    if (typeof(num) !== "number") return `${num} is not a number`;
    if (num%2 === 0) {
        return "Your number is even";
    } else {
        return "Your number is odd";
    }
}