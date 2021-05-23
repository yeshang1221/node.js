# (1) 請問下列程式執行後的結果為何？為什麼？

console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 1000);
})();

console.log("end");

A：
1.start >> IIFE >> end >> Timeout
2.setTimeout被丟到webapis延遲一秒後執行,進入queue排隊,event loop檢查後回傳到stack最後才顯示結果
# (2) 請問下列程式執行的結果為何？為什麼？

console.log("start");

(function () {
  console.log("IIFE");
  setTimeout(function () {
    console.log("Timeout");
  }, 0);
})();

console.log("end");
A：
1.start >> IIFE >> end >> Timeout
2.雖然設定延遲秒數為0,但他還是有丟到webapis去執行,到queue,event loop檢查,回傳到stacks最後顯示結果

# (3) 請問下列程式執行的結果為何？為什麼？

const bar = () => console.log("bar");全域

const baz = () => console.log("baz");全域

const foo = () => {
    console.log("foo");
    bar();
    baz();
};

foo();
A：
1.foo >> bar >>baz
2.const foo = () =>
為一個function因此foo()為呼叫const foo,然後依序執行
console.log("foo") >> console.log("bar") >> console.log("baz") 
# (4) 請問下列程式執行的結果為何？為什麼？

const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
    console.log("foo");
    setTimeout(bar, 0);
    baz();
};

foo();

A：
1.foo >> baz >>bar
2.因setTimeout雖然設定為0秒,還是會被丟去webapis執行,回傳至queue,event loop檢查到queue還有東西,在丟到stacks,最後顯示結果