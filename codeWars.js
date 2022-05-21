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


function defineSuit(card) {
    // good luck
    return card.includes('♣') ? 'clubs'
        : card.includes('♦') ? 'diamonds'
            : card.includes('♥') ? 'hearts'
                : 'spades'
}


//-----------------------------------------------------------------------



function noSpace(x){
    return x.replace(/\s/g, '')
}


//------------------------------------------------------------------------




function dontGiveMeFive(start, end){
    let a = []
    for(let i = start; i <= end; i++){

        if(i.toString().includes('5'))
        {
            a = a
        } else {
            a.push(i.toString())
        }
    }
    return(a.length)
}


//-------------------------------------------------------------------------


function digitize(n) {
    let a = Array.from(String(n), Number)
    let x = a.reverse()
    return x
}


//————————————————————


function squareOrSquareRoot(array) {
    let a = []
    for(let i = 0; i < array.length; i++){
        if( Number.isInteger( (Math.sqrt(array[i]) ) ) ){
            a.push(Math.sqrt(array[i]))
        } else {
            a.push(array[i] * array[i])
        }
    }
    return a;
}



//—————————————————————


function squareOrSquareRoot(array) {
    return array.map(x => {
        const r = Math.sqrt(x);
        return (r % 1 == 0) ? r : (x*x);
    });
}




//—————————————————————


function validatePIN (pin) {
    //return true or false
    return pin.match(/^\d{4}$|^\d{6}$/) ? true : false
}

//----------------------------------

function missingNo(nums) {
    let a = nums.sort((f, s) => f - s)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] - nums[i + 1] === -2) {
            return (nums[i] += 1)
        }
    }
    console.log(a)
}


//------------------------------------------


function consecutive(arr, a, b) {
    // Your code here...
    for(let i = 0; i < arr.length; i++){
        if(a === arr[i] && b === arr[i + 1]) {
            return true
        } else if(a === arr[i + 1] && b === arr[i]) {
            return true
        }
    }
    return false
}


//---------------------------------------------------------


function to_nato(words) {
    // Go code
    let a = [...words];
    let nato = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu'
    }
    return a.filter((ch) => ch !== ' ').map((i) => {
        if(/[^a-z]/.test( i.toLowerCase() )) { return i }
        else { return nato[i.toLowerCase()]; }
    }).join(' ');
}

//-----------------------------------------------------


function shortestStepsToNum(num) {
    let a = []
    function innerRecursion(num) {
        if(num === 1) {
        } else if((num % 2) === 0) {
            a.push(1)
            return innerRecursion(num /= 2)
        } else if((num % 2) !== 0) {
            a.push(1)
            return innerRecursion(num -= 1)
        }
        return(a.length)
    }
    return innerRecursion(num)
}