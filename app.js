'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
const length = process.argv[2] || 0;
function trib(n) {
    if (!memo.has(n)) {
        let nMinus3 = n - 3;
        memo.set(n, trib(n - 1) + trib(n - 2) + trib(nMinus3));
        //不要になったメモを削除
        memo.delete(nMinus3);
    }
    return memo.get(n);
}
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
