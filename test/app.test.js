const {
    calculateBill,
    getUserRole,
    addNumbers,
    addValues
} = require("../src/app");

test("calculateBill should calculate the total bill", () => {
    expect(calculateBill(100, 5)).toBe(500);
});

test("getUserRole should return Administrator for admin", () => {
    expect(getUserRole("admin")).toBe("Administrator");
});

test("addNumbers should add two numbers", () => {
    expect(addNumbers(10, 20)).toBe(30);
});