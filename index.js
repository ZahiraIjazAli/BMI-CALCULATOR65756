function Bmi() {
let weight=document.querySelector("#weight").value
let height=document.querySelector("#height").value
let bmi=(weight/(height*height)*730)

document.querySelector("#change").innerHTML=`Your bmi is: ${bmi}`
console.log(change)
}