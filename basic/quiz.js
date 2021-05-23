

// console.log("start");

// (function () {
//   console.log("IIFE");
//   setTimeout(function () {
//     console.log("Timeout");
//   }, 1000);
// })();

// console.log("end");

// console.log("start");

// (function () {
//   console.log("IIFE");
//   setTimeout(function () {
//     console.log("Timeout");
//   }, 0);
// })();

// console.log("end");


const bar1 = () => console.log("bar1");

const baz1 = () => console.log("baz1");

const foo1 = () => {
    console.log("foo1");
    bar1();
    baz1();
};

foo1();


const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    baz();
};

foo();

