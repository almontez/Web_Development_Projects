async function isNameValid(name) {
    if (typeof(name) !== "string") {
        return false;
    } else if (name.length < 1) {
        return false;
    } else {
        return true;
    }
}

async function isNumberValid(number) {
    if (typeof(number) !== "number") {
        return false;
    } else if (number <= 0) {
        return false;
    } else {
        return true;
    }
}

async function isUnitValid(unit) {
    if (typeof(unit) !== "string") {
        return false;
    } else if (unit !== "kgs" && unit !== "lbs") {
        return false;
    } else {
        return true;
    }
} 

async function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

export { isNameValid, isNumberValid, isUnitValid, isDateValid }
