import modelCreator from "./dom.js";
import { factoryDom } from "./dom.js";

const dataArray = []
class Data{
    constructor(name, type, amount, divInto){
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.divInto = divInto
    }  
}

function addCard(name, type, amount, divInto){
    const newData = new Data(name, type, amount, divInto)

    modelCreator(name,type,amount,divInto)
    dataArray.push(newData)
}

dataArray.push({
    name: 'Bills', 
    type: 'Debt',
    amount: 400,
    divInto: 4
})

const calcArr = [];

function currencySign(currencySelect){
    let amountSign=''
    switch (currencySelect) {
        case 'usd':
            amountSign = '$';
            break;
        case 'eur':
            amountSign = '€';
            break;
        case 'gbp':
            amountSign = '£';
            break;
        case 'jpy':
            amountSign = '¥';
            break;
        case 'try':
            amountSign = '₺';
            break;
        default:
            amountSign = '';
    }

    return amountSign
}

export const  calc = (amount, divideInto, theDiv,currencySelect) =>{
     let sum = Math.round(amount / divideInto)
        calcArr.length = 0;
    for (let i = 0; i < divideInto; i++) {
        calcArr.push(sum);
    } 
    theDiv.innerHTML = '';
    // Append new results
    for (let j = 0; j < calcArr.length; j++) {
        const eachDivision = factoryDom('span', 'division', 'division', calcArr[j])
        eachDivision.setInnerText(currencySelect + calcArr[j])
        eachDivision.appender(theDiv)
    }
   

}


export function DivisionClickCalculation(event, theDiv, currencySelect, total, amount){
    if (event.target.classList.contains('division')) {
        const clickedSpan = event.target;  
        const clickedValue = clickedSpan.value

        console.log(clickedValue)
        let clickCount = clickedSpan.dataset.clickCount || 0;  
        clickCount++;  
        clickedSpan.dataset.clickCount = clickCount;
   
            if(clickCount % 2 === 0 ){
            total -= clickedValue;
            clickedSpan.style.backgroundColor = 'rgb(44, 42, 39)'
            theDiv.setInnerText(`${currencySelect}${total} / ${currencySelect}${amount}`)
            console.log(clickedValue)
        }else{
            total += clickedValue;
            clickedSpan.style.backgroundColor = 'rgb(22 101 52)'
            theDiv.setInnerText(`${currencySelect}${total} / ${currencySelect}${amount}`)
        }
        }

        if(total == amount){
            theDiv.setInnerText(`Completed`)
            theDiv.setBgColor('green')
        }else{
            theDiv.setBgColor('rgb(136, 12, 12)')
        }
}

let getCurrency = '$'

function displayer(currencySelect){  

    for(let i = 0; i<dataArray.length; i++){
        modelCreator(dataArray[i].name, dataArray[i].type, dataArray[i].amount, dataArray[i].divInto, i,currencySelect)
        
    }

}

export const getCalcArr = (() => {return calcArr})();

export function deleeFunc(model){
    const index = parseInt(model.getAttribute("data-index"));
           var confirmToRemove = confirm('Are you sure you want to remove this Card')
       
           if(confirmToRemove){
               dataArray.splice(index, 1);
               modelSpace.innerHTML = "";
               displayer()
               console.log(dataArray)
           }else{
               alert('Cancelled')
           }

}

displayer(getCurrency)

function formCaller(){
    let getCurrency = currencySign(currencySelect.value)
    console.log(getCurrency)
    addCard(nameInput.value, typeSelect.value, amountInput.value, divIntoInput.value)

    modelSpace.innerHTML = "";
    displayer(getCurrency)
    calc(amountInput.value, divIntoInput.value );
    
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
  
   
    formCaller()
    form.reset();

   })
