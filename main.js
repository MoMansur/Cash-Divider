import modelCreator from "./dom.js";
import factoryTreeElements from "./algorithm.js";



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
    amount: 200,
    divInto: 3
})


function amountDivider(){

    function maths(amount, divideInto){
        for(let i =0; i<divideInto; i++){
            let all = amount / divideInto
          models(all)
        }
    }
    maths(100, 4)
}



function displayer(){  
    for(let i = 0; i<dataArray.length; i++){
        modelCreator(dataArray[i].name, dataArray[i].type, dataArray[i].amount, dataArray[i].divInto, i)
    }
}

export function deleeFunc(model){
    const index = parseInt(model.getAttribute("data-index"));
           var confirmToRemove = confirm('Are you sure you want to remove this book')
       
           if(confirmToRemove){
               dataArray.splice(index, 1);
               modelSpace.innerHTML = "";
               displayer()
               console.log(dataArray)
           }else{
               alert('Cancelled')
           }

}

displayer()

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    addCard(nameInput.value, typeSelect.value, amountInput.value, divIntoInput.value)

    modelSpace.innerHTML = "";
    displayer()
    console.log(dataArray)
   })

let getFactoryAlg = factoryTreeElements()

  export function treeDisplayer(index){
    const treeArray = getFactoryAlg.treeArray
    console.log(treeArray)

   }

   