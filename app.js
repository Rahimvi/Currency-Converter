// currency One, currency two, swap, rate, amount variable

const countryOne = document.getElementById("country-one");
const countryTwo = document.getElementById("country-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate(){
    const currencyOne = countryOne.value;
    const currencyTwo = countryTwo.value;

    fetch(`https://api.exchangerate.host/latest${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.rates[currencyTwo];
        rate.innerText = `1 ${currencyOne} = ${rates} ${currencyTwo}`;
        amountTwo.value = (amountOne.value * rates).toFixed(2);
    })
}

countryOne.addEventListener("change",calculate());
countryTwo.addEventListener("change",calculate());
amountOne.addEventListener("input",calculate());
amountTwo.addEventListener("input",calculate());
swap.addEventListener("click",()=>{
    const temp = countryOne.value;
    countryOne.value = countryTwo.value;
    countryTwo.value = temp;
    calculate();
})

calculate();

// https://api.exchangerate.host/latest
// https://api.exchangeratesapi.io/latest?base=