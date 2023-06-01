window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function name() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),1000)
})
}
function name1() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),2000)
})
}
function name2() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),3000)
})
}
function name3() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),4000)
})
}
function name4() {
return new Promise((res,rej)=>{
	setTimeout(()=>res("Hello, world!"),5000)
})
}
window.promises.push(name(),name1(),name2(),name3(),name4());
Promise.any(window.promises).then(res=> { const outputDiv = document.getElementById('output');
    outputDiv.textContent = res;})