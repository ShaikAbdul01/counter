let count = document.getElementById("count");
let intervalId;
function counter() {
  let num = 0;
  intervalId = setInterval(() => {
    count.innerText = num++;
    // console.log(count.innerText = num++);
  }, 1000);
}
function stoper() {
  clearInterval(intervalId);
}
let a = 0;
function reset() {
  console.log((count.innerText = a));
  clearInterval(intervalId);
}
