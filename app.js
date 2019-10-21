'use strict';
// JavaScript を Strict モードで利用

const number = process.argv[2] || 0;
// process.argv は Node.js にデフォルトで存在する、コマンドラインの引数が入った配列。
// 添字の 0 番には node コマンドのファイルのパスが入り、
// 1 番には、実行しているプログラムのファイルのパスが入る、という決まりがある。
// よってコマンドの後ろに書いた最初の引数は process.argv[2] となる。

// 条件付き論理和(or / または)は、先に左側の値を見て Truthy ならその値を結果とする。
// 左側の値が Falsy なら右側の値を結果として使う、という特性がある。
// よってこのコードが実行されると、process.argv[2] が 0 や null や undefined などの
// Falsy な値である場合、number には 0 が代入される。

let sum = 0;
for (let i = 1; i <= number; i++){
    sum = sum + i;
}

console.log(sum);