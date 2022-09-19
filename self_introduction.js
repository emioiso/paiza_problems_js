/*
自己紹介 (paizaランク D 相当)

【期待する出力】
name: Kirishima
language: Ruby, English
hitokoto: がんばります!
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
//   console.log(lines[0]);
  console.log('name: Kirishima');
  console.log('language: Ruby, English');
  console.log('hitokoto: がんばります!');  
});