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



let getCurrency = '$'

function displayer(currencySelect){  

    for(let i = 0; i<dataArray.length; i++){
        modelCreator(dataArray[i].name, dataArray[i].type, dataArray[i].amount, dataArray[i].divInto, i,currencySelect)
        
    }

}


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
    
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
  
   
    formCaller()
    form.reset();

   })
