// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            if(contacts[i].hasOwnProperty(prop) === true) {
                console.log(contacts[i][prop]);
                return contacts[i][prop];
            }
            console.log(contacts[i].prop);
            return "No such property"
        }
    }
    console.log("No such contact")
    return "No such contact"
    // Only change code above this line
}

lookUpProfile("Akira", "likes");





//RECURSION---------------------------------------------------

// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
// Only change code above this line


//RECURSION complex--------------------------------------------

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        console.log(countArray)
        return countArray;
    }
}

//-------------------------------------------------------------------




function createPhoneNumber(numbers){
    let result = ''
    for(let i = 0; i < 10; i++){

        if(result.length === 0){
            result += '\('

        } else if(result.length === 1 || result.length < 4) {

            for(let i = 0; i < 3; i++) {
                result += numbers[i]
            }
            if(result.length === 4) {
                result += '\) '
            }

        } else if(result.length === 6 ) {

            let a = numbers.slice (3, 7)
            for(let i = 0; i < 3; i++) {
                result += a[i]
            }
            if(result.length === 9) {
                result += '-'
            }

        } else if(result.length === 10) {

            let a = numbers.slice (6, 10)
            for(let i = 0; i < 4; i++) {
                result += a[i]
            }
        }
    }
    return result
}


function createPhoneNumber1(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}


function createPhoneNumber2(numbers){
    return '(' + numbers.slice(0,3).join('') + ') ' + numbers.slice(3,6).join('') + '-' + numbers.slice(6).join('');
}
//--------------------------------------------------------------------

function squareDigits(num){
    let a = num.toString();
    let b = a.map((c) => Number(c*c))
    return(b);
}

//--------------------------------------------------------------------