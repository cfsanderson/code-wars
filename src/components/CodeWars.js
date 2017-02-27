Completed (65)

7 kyu
Square Every Digit



const squareDigits = (num) => {
  let squared = num.toString().split('').map((a) => a*a).join('')
  return parseInt(squared)
}


6 kyu
Who likes it?

const likes = (names) => {
  if (names.length < 1) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return (names.join('') + ' likes this')
  } else if (names.length === 2) {
    return (names.join(' and ') + ' like this')
  } else if (names.length === 3) {
    return (names[0] + ', ' +
            names[1] + ' and ' +
            names[2] + ' like this')
  } return (names[0] + ', ' +
            names[1] + ' and ' +
            (names.length - 2) + ' others like this')
}

6 kyu
Stop gninnipS My sdroW!

const spinWords = (string) => {
  let split = string.split(' ')
  let arr = []
  for (let i = 0; i < split.length; i++) {
    if (split[i].length < 5) {
      arr.push(split[i])
    } else {
      arr.push(split[i].split('').reverse().join(''))
    }
  }
  return arr.join(' ')
}


6 kyu
Multiples of 3 and 5

const solution = (n) => {
  let array = []
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i)
    }
  }
  return array.reduce((a, b) => {
    return a + b
  }, 0)
}


8 kyu
Calculate average

const find_average = (array) => {
  let sum = array.reduce((acc, i) => {
    return acc + i
  }, 0)
  return sum / array.length
}


7 kyu
Descending Order

const descendingOrder = (n) => {
  const split = n.toString().split('').sort((a, b) => {
    return b - a
  }).join('')
  return parseInt(split, 10)
}


BetaTIY-FizzBuzz

const tiyFizzBuzz = (sentence) => {
  console.log(sentence)
  const split = sentence.split('')
  let newArray = []
  for (let i = 0; i < split.length; i++) {
    let letter = split[i]
    if (/([AEIOU])/g.test(letter)) {
      newArray.push('Iron Yard')
    } else if (/([aeiou])/g.test(letter)) {
      newArray.push('Yard')
    } else if (/([BCDFGHJKLMNPQRSTVWXYZ])/g.test(letter)) {
      newArray.push('Iron')
    } else newArray.push(letter)
  }
  return newArray.join('')
}


7 kyu
Get the Middle Character



const getMiddle = (s) => {
  if (s.length % 2 === 0) {
    return (s[((s.length / 2) -1)] + s[(s.length / 2)])
  } else {
    return (s[Math.floor(s.length / 2)])
  }
}


7 kyu
Failed Filter - Bug Fixing #3



const FilterNumbers = str => str.replace(/[0-9]/gi,'')



7 kyu
Jaden Casing Strings



String.prototype.toJadenCase = function() {
  const array = this.split(' ')
  const map = array.map((a, b) => {
    return a[0].toUpperCase() + a.slice(1)
  })
  const string = map.join(' ')
  return string
};


8 kyu
Find variable which breaks strict comparison!



function findStrangeValue() {
  return NaN
}


8 kyu
Sum without highest and lowest number



const sumArray = (array) => {
  if (Array.isArray(array) && array.length > 1) {
    const highLowSum = Math.max(...array) + Math.min(...array)
    const sum = array.reduce((acc, cur) => acc + cur, 0) - highLowSum
    return sum
  } else {
    return 0
  }
}


8 kyu
Count of positives / sum of negatives



const countPositivesSumNegatives = (input) => {
  let pos = [], neg = [], totals = []

  if (!input || input.length === 0) {
    return totals
  } else {

    input.map((a, b)=> {
      return (a <= 0) ? neg.push(a) : pos.push(a)
    })

    let sum = neg.reduce((a, b) => {
      return a + b
    }, 0)

    totals.push(pos.length)
    totals.push(sum)
    return totals
  }
}
1 month agoRefactorDiscuss
7 kyu
Vowel Count



const getCount = (str) => {
  let vowelsCount = []
  const split = str.split('')
  const map = split.map((x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      vowelsCount.push(x)
    }
  })
  return vowelsCount.length;
}
1 month agoRefactorDiscuss
7 kyu
Highest and Lowest



const highAndLow = (n) => {
  let arr = n.split(' ').map((x) => parseInt(x))
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}
1 month agoRefactorDiscuss
8 kyu
Count by X



const countBy = (x, n) => {
  let z = []
  for (i=1; i <= n; i++) {
    z.push(x * i)
  } return z
}
1 month agoRefactorDiscuss
8 kyu
Return Negative



const makeNegative = n => (n <= 0) ? n : (n - (n + n))
1 month agoRefactorDiscuss
8 kyu
Switch/Case - Bug Fixing #6



function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}
1 month agoRefactorDiscuss
7 kyu
Failed Sort - Bug Fixing #4



var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}
1 month agoRefactorDiscuss
8 kyu
String Templates - Bug Fixing #5



function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
1 month agoRefactorDiscuss
7 kyu
Regex Failure - Bug Fixing #2



function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
}
1 month agoRefactorDiscuss
8 kyu
Unfinished Loop - Bug Fixing #1



const createArray = (number) => {
  const newArray = []
  for (let counter = 1; counter <= number; counter++){
    newArray.push(counter)
  }
  return newArray
}
1 month agoRefactorDiscuss
7 kyu
Count the Characters



const countChar = (str, char) => {
  let arr = str.toLowerCase().split('')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char.toLowerCase()) {
      newArr.push(arr[i])
    }
  }
  return newArr.length
}

1 month agoRefactorDiscuss
6 kyu
Unique In Order



const uniqueInOrder = (iterable) => {
  let arr = typeof(iterable) === 'string' ? iterable.split('') : iterable
  let i = 0
  let newArray = []
  while (arr[i]) {
    if (arr[i] != arr[i+1]) {
      newArray.push(arr[i])
    }
    i++
  } return newArray
}
1 month agoRefactorDiscuss
7 kyu
Discover The Original Price



const discoverOriginalPrice = (d, s) => parseFloat((d / ((100 - s) * 0.01)).toFixed(2))
1 month agoRefactorDiscuss
7 kyu
Mumbling



const accum = (s) => {
	const lowCase = s.toLowerCase().split('')
  const mapped = lowCase.map((a, b) => {
    return a.charAt().toUpperCase() + a.repeat(b)
  })
  return mapped.join('-')
}
1 month agoRefactorDiscuss
8 kyu
Generate range of integers



const generateRange = (min, max, step) => {
  const arr =[]
  while (min <= max) {
    arr.push(min)
    min = min + step
  }
  return arr
}
1 month agoRefactorDiscuss
7 kyu
Beginner Series #3 Sum of Numbers



const GetSum = (a, b) => {
  let n = []
  if (a === b) {
    n.push(a)
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      n.push(i)
    }
  } else {
    for (let i = b; i <= a; i++) {
      n.push(i)
    }
  }
  return n.reduce((i, j) => i + j, 0)
}
1 month agoRefactorDiscuss
8 kyu
Reversing Words in a String



const reverse = (s) => s.split(' ').reverse().join(' ')
1 month agoRefactorDiscuss
7 kyu
All Star Code Challenge #24



const hypotenuse = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

const leg = (c, a) => Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2))
1 month agoRefactorDiscuss
8 kyu
Double Char



const doubleChar = s => Array.from(s, i => i + i).join('')
1 month agoRefactorDiscuss
8 kyu
Opposite number



const opposite = n => n = -n
1 month agoRefactorDiscuss
8 kyu
Sum of positive



const positiveSum = (arr) => {
  if (arr.length === 0) {
    return 0
  } else {
    const newArray = arr.map((a) => {
      return a < 0 ? a = 0 : a;
    })
    const sum = newArray.reduce((a,b) => {
      return a + b
    }, 0);
    return sum
  }
}
1 month agoRefactorDiscuss
8 kyu
Multiply



const multiply = (a, b) => {return a * b}
1 month agoRefactor
function multiply(a, b){
  return a * b
}
3 months agoRefactor
8 kyu
Even or Odd



const even_or_odd = n => (n % 2) != 0 ? "Odd" : "Even"
1 month agoRefactorDiscuss
8 kyu
Training JS #10: loop statement --for



const pickIt = (arr) => {
  let odd = []
  let even = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 > 0 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd,even];
}
1 month agoRefactorDiscuss
8 kyu
Fake Binary



const fakeBin = x => x.split('').map(n => n < 5 ? 0 : 1).join('')
1 month agoRefactorDiscuss
8 kyu
Training JS #9: loop statement --while and do..while



const padIt = (str, n) => {
  if (n === 0) return str
  let i = 1
  while (i <= n) {
    if (i % 2 > 0) {
      str = '*' + str
    } else {
      str = str + '*'
    }
    i++
  }
  return str
}
1 month agoRefactorDiscuss
7 kyu
Fizz Buzz - Without ifs



const fizzBuzz = n => {
  return  (n % 15 === 0 && 'FizzBuzz') ||
          (n % 3  === 0 && 'Fizz') ||
          (n % 5  === 0 && 'Buzz') ||
           n
};
1 month agoRefactorDiscuss
8 kyu
Training JS #8: Conditional statement--switch



const howManydays = (month) => {
  let days
  switch (month) {
    case 2:
      days = 28
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    default:
      days = 31
  }
  return days
}
1 month agoRefactorDiscuss
8 kyu
Training JS #7: if..else and ternary operator



const saleHotdogs = n => n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
1 month agoRefactorDiscuss
8 kyu
Training JS #6: Basic data types--Boolean and conditional statements if..else



const trueOrFalse = val => val ? 'true' : 'false'
1 month agoRefactorDiscuss
7 kyu
Milliseconds



const toString = (time) => {
  const seconds = time / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  let parts
  if (hours >= 1) {
    parts = [
      Math.floor(hours),
      ("0" + Math.floor(minutes % 60)).slice(-2),
      ("0" + Math.floor(seconds % 60)).slice(-2),
    ]
  } else {
    parts = [
      Math.floor(minutes % 60),
      ("0" + Math.floor(seconds % 60)).slice(-2)
    ]
  }
  return parts.join(":")
}
1 month agoRefactorDiscuss
7 kyu
Suzuki needs help lining up his students!



const lineupStudents = (students) => {
  return students
    .trim()
    .split(' ')
    .sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length
      } else {
        return b.localeCompare(a)
      }
    }
  )
}
1 month agoRefactorDiscuss
8 kyu
Training JS #5: Basic data types--Object



const animal = (obj) => 'This ' + obj.color + ' ' + obj.name + ' ' + 'has ' + obj.legs + ' ' + 'legs.'

1 month agoRefactorDiscuss
8 kyu
Training JS #4: Basic data types--Array



const getLength = arr => arr.length

const getFirst = arr => arr[0]

const getLast = arr => arr[arr.length-1]

const pushElement = (arr) => {
  var el = 1
  arr.push(el)
  return arr
}

const popElement = (arr) => {
  arr.pop()
  return arr
}
1 month agoRefactorDiscuss
8 kyu
Training JS #3: Basic data types--String



var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  const d = d1 + a2 + d2
  return d;
}
function Bee(){
  const b = b1 + e2 + e2
  return b;
}
function banana(){
  const naner = b2 + a2 + n2 + a2 + n2 + a2
  return naner;
}

function answer1(){
  const nope = 'no' //the answer should be "yes" or "no"
  return nope;
}
function answer2(){
  const nope = 'no' //the answer should be "yes" or "no"
  return nope;
}
function answer3(){
  const yep = 'yes' //the answer should be "yes" or "no"
  return yep;
}

1 month agoRefactorDiscuss
8 kyu
Training JS #2: Basic data types--Number



var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1
  var b=v1
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v3   //set number value to a
  var b=v1   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3   //set number value to b
  return a%b;
}
1 month agoRefactorDiscuss
8 kyu
Training JS #1: create your first JS function and print "Helloworld!"



const helloWorld = () => {
  const str = 'Hello World!'
  console.log(str)
}
1 month agoRefactorDiscuss
7 kyu
List Filtering



const filter_list = (l) => {
  const isString = (n) => {
    return typeof n !== "string" ||
    (typeof n !== "object" &&
    n.constructor !== String)
  }
  const number = l.filter(isString)
  return number
}
1 month agoRefactorDiscuss
8 kyu
A Needle in the Haystack



const findNeedle = a => {return('found the needle at position ' + a.indexOf('needle'))}
2 months agoRefactorDiscuss
8 kyu
Counting sheep...



const countSheeps = a => a.filter(p => p).length
2 months agoRefactorDiscuss
7 kyu
Find twins



const elimination = (arr) => {
  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return arr[i]
  }
  return null
}
2 months agoRefactorDiscuss
8 kyu
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?



const isOpposite = (s1,s2) => {
  if (s1 === '') return false
  return s1
    .split('')
    .map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
    .join('') === s2
  }
2 months agoRefactorDiscuss
8 kyu
Convert a string to an array



const stringToArray = (string) => {return string.slice(' ')}
2 months agoRefactorDiscuss
function stringToArray(string){return string.slice(' ')}
2 months agoRefactorDiscuss
8 kyu
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence



const replace = (s) => {str = s.replace(/[aeiou]/gi, '!'); return str}
2 months agoRefactorDiscuss
8 kyu
Exclamation marks series #1: Remove a exclamation mark from the end of string



const remove = (s) => {
  const newWord = (s.charAt(s.length-1) === "!") ? s.slice(0, -1) : s
  return newWord
}
2 months agoRefactorDiscuss
7 kyu
Averages of numbers



function averages(numbers) {
  if (!Array.isArray(numbers)) return []
  var arr = []
  for ( var i = 0; i < numbers.length - 1; i++) {
    var result = (numbers[i] + numbers[i + 1]) / 2
    arr.push(result)
  }
  return arr
}
2 months agoRefactorDiscuss
7 kyu
Help Suzuki complete his chores!



function choreAssignment(chores) {
  const compare = (a, b) => {return a - b}
  const sort = chores.sort(compare)
  const splitReversed = sort.splice(sort.length / 2).reverse()
  let sum = []
  for(var i = 0; i < sort.length; i++) {
    sum.push(sort[i] + splitReversed[i]);
  }
  return sum.sort(compare)
}
2 months agoRefactorDiscuss
8 kyu
Find Maximum and Minimum Values of a List



// solving this one with a sort
var min = function(list){
 list.sort((a, b) => a - b)
 return list[0];
}

// solving with reduce
const max = (list) => {
  return list.reduce((acc, n) => acc > n ? acc : n)
}
2 months agoRefactorDiscuss
8 kyu
Holiday VIII - Duty Free



function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)))
}
2 months agoRefactorDiscuss
8 kyu
Grasshopper - Summation



const summation = (num) => {
  let sum = 0
  for (let i = 1; i <= num; i++){
    sum += i
  }
  return sum
}
2 months agoRefactorDiscuss
8 kyu
Convert number to reversed array of digits



const digitize = n => n.toString().split('').reverse().map(d => parseInt(d))
2 months agoRefactorDiscuss
8 kyu
Jenny's secret message



function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!"
  }
}
