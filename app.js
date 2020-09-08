'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
const length = process.argv[2] || 0;
function trib(n) {
    if (!memo.has(n)) {
        memo.set(n, trib(n - 1) + trib(n - 2) + trib(n - 3));
    }
    return memo.get(n);
}
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
console.log(`Memo Size: ${memo.size}`);
