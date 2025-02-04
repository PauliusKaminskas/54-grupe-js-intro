console.log(true && false); //false
console.log(true || false); //true
console.log(false || (true && false)); //false
console.log((5 > 3) && (10 < 20)); //true
console.log((5 > 10) || (10 > 5)); //true

console.log(`---`);

console.log(!true); //false
console.log(!(5 > 3)); //false
console.log(!(false || true)); //false
console.log(!(10 < 5 && 5 > 2)); //true

console.log(`---`);

function canPersonDrive(age, hasLicense) {
    if (typeof age !== "number" || typeof hasLicense !== "boolean") {
        throw new Error("Invalid input: age must be a number and hasLicense must be a boolean");
    }

    return age >= 18 && hasLicense ? "Can drive" : "Cannot drive";
}

console.log(canPersonDrive(15, false)); // Cannot drive
console.log(canPersonDrive(19, false)); // Cannot drive
console.log(canPersonDrive(20, true)); // Can drive

console.log('---');

function numbercheck(num){
    if (num > 10 && num < 100) {
        return true;
    } else if (num <= 10) {
        return false;
        }
      else if (num >= 100) {
            return false;
            }
}
console.log(numbercheck(10)) //false
console.log(numbercheck(20)) //true
console.log(numbercheck(110)) //false