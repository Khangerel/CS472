console.log("CS472 Lab5 Part-1 Khangerel Ganzorig");

function max(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

function isVowel(s) {
  const vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  return vowels.includes(s);
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
function multiply(numbers) {
  let total = 1;
  for (let i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }
  return total;
}

function reverse(str) {
    let result = "";
    let i = 0;
    while (i < str.length) {
      result += str.charAt(str.length - i - 1);
      i++;
    }
    return result;
  }

function findLongestWordLength(words) {
    let max = 0;
    words.forEach(element => {
        if (element.length > max) {
            max = element.length;
        }
    });
    return max;
}

function filterLongWords(words, i) {
    let filtered = [];
    words.forEach(element => {
        if(element.length >= i) {
            filtered.push(element);
        }
    })
    return filtered;
}

var result = max(10, 20);
var result2 = maxOfThree(21, 45, 89);

console.log("1. max of (10, 20):>> ", result);
console.log("2. max of (21, 45, 89) :>> ", result2);
console.log("3. isVowel A:>> ", isVowel("A"));
console.log("4. 1. sum (1, 2, 3, 4):>> ", sum([1, 2, 3, 4]));
console.log("4. 2. multiply (1, 2, 3, 4) :>> ", multiply([1, 2, 3, 4]));
console.log("5. reverse of - Taj Mahal :>> ", reverse("Taj Mahal"));
console.log("6. findLongestWordLength (abc, agvm, avjsdo) :>> ", findLongestWordLength(["abc", "agvm", "avjsdo"]));
console.log("7. filterLongWords (a, aa, aa, aaa, aaab, aaab, aaab):>> ", filterLongWords(["a", "aa", "aa", "aaa", "aaab", "aaab", "aaab"], 3));
