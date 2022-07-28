const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);

const num=1443;
console.log(reverse(num));
