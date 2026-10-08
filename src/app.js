function calculateBill(price, quantity) {
    var total = price * quantity;

    if (quantity > 0) {
        console.log("Quantity is valid");
    }

    return total;
}

function getUserRole(username) {
    var password = "admin123";

    if (username == "admin") {
        return "Administrator";
    }

    return "User";
}

function addNumbers(a, b) {
    return a + b;
}

function addValues(x, y) {
    return x + y;
}

console.log(calculateBill(100, 5));
console.log(getUserRole("admin"));
module.exports = {
    calculateBill,
    getUserRole,
    addNumbers,
    addValues
};