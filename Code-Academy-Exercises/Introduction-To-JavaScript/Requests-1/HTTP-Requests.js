console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/*When a JavaScript program runs, functions are placed in a stack and run asynchronously, while
any functions that make a request is placed in a separate queue and run after the stack is
complete (event loop). This makes for a smoother user experience.*/
