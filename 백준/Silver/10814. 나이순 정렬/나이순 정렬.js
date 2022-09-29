// 나이순 정렬
const fs = require("fs");
const [N,...ageName] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt","utf8")
    .toString()
    .trim()
    .split("\n")
    .map((e) => e.replaceAll('\r', ''))
    
    console.log(ageName
    .map(v => ({age: parseInt(v.split(" ")[0]), name: v.split(" ")[1]}))
    .sort((a, b) => a.age - b.age)
    .map(v => String(v.age) + " " + v.name)
    .join("\n")
    );