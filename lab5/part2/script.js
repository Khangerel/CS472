"use strict";

// Prob 1
function computeSumOfSquares(arr) {
  return arr.map((x) => x * x).reduce((acc, curr) => acc + curr, 0);
}

function printOddNumbersOnly(arr) {
  arr.filter((x) => x % 2 !== 0).forEach((x) => console.log(x));
}

function printFibo(n, a, b) {
  const fiboSeq = [a, b];
  for (let i = 2; i < n; i++) {
    fiboSeq.push(fiboSeq[i - 1] + fiboSeq[i - 2]);
  }
  console.log(fiboSeq.join(", "));
}

console.log("computeSumOfSquares (1, 2, 3) = ", computeSumOfSquares([1, 2, 3]));
console.log('Print odd numbers only (1, 2, 3, 4, 5) :>> ');
printOddNumbersOnly([1, 2, 3, 4, 5]);
console.log('print Fibonacci (10, 0 ,1) :>> ');
printFibo(10, 0, 1);

// Prob 2
console.log("Problem 2");
let user = {
  name: "John",
  years: 30,
};

// implementation
let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

// Prob 3

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3257,
  },
];

function addBook(title, author, libraryID) {
  let newBook = { title, author, libraryID };
  libraryBooks.push(newBook);
  return newBook;
}

function getTitles() {
  return libraryBooks.map((book) => book.title).sort();
}

function findBooks(keyword) {
  return libraryBooks
    .filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.author.localeCompare(b.author));
}

addBook("The Great Gatsby", "F. Scott Fitzgerald", 7896);
console.log(getTitles());
console.log(findBooks("the"));
