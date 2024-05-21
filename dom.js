
import { deleeFunc} from "./main.js";
import { getCalcArr } from "./main.js";




const modelSpace= document.getElementById('modelSpace')


 const modelCreator = ((name, type, amount, divInto, index)=>{

    
function cardDiv(){

    const card = document.createElement('div')
    card.id = 'card';
    card.setAttribute(`data-index`, index)

    modelSpace.append(card)
    
    const firstLineFunc = (() =>{
        const firstLine = document.createElement('div')
        firstLine.className = 'firstLine'

        //DATA
        const nameSpan = document.createElement('span')
        nameSpan.innerText = name;
        nameSpan.id = 'nameSpan'
    
        const typeSpan = document.createElement('span')
        typeSpan.id = 'typeSpan'
        typeSpan.innerText = type;
    
        const amountSpan = document.createElement('span')
        amountSpan.id = 'amountSpan'
        amountSpan.innerText = amount;
    
        const divIntoSpan = document.createElement('span')
        divIntoSpan.id = 'divIntoSpan'
        divIntoSpan.innerText = divInto;

        //BUTTONS
        const viewBtn = document.createElement('button')
        viewBtn.id = 'viewbtn'
        viewBtn.className = 'btn btn-success'
        viewBtn.innerText = 'View'
        viewBtn.style.marginRight = '10px'
    

        const deleteButton = document.createElement('button')
        deleteButton.className = 'btn btn-danger'
        deleteButton.innerText = 'Delete Card'


    //APPEND
        firstLine.append(nameSpan)
        firstLine.append(typeSpan)
        firstLine.append(amountSpan)
        firstLine.append(divIntoSpan)
        firstLine.append(viewBtn)  
        firstLine.append(deleteButton)  
        
        card.append(firstLine)

     //DELETE BUTTON FUNCTION
        const deleteEvent = (()=>{
            deleteButton.addEventListener('click', ()=>{deleeFunc(card)})
        })();


    
    



//AN EXPORT


  
    
        

    })();

    const secondLineFunc = (() =>{
            
        const secondLine = document.createElement('div')
        secondLine.className = 'secondLine'
        secondLine.innerText = 'Calculations'
        
            card.append(secondLine)

      

            const calcDiv = document.createElement('div')
            calcDiv.className = 'CalcDivs'

           

        
            // for(let i=0; i<calcArr[i]; i++){
            //     const calcBtn = document.createElement('button')
            //     calcBtn.innerText = getCalcArr[i]
              
            //     calcDiv.append(calcBtn)
          
           
            // }
   
            console.log(getCalcArr)
            secondLine.append(calcDiv)
            

            
         
        })();
   
   

}

 
   return cardDiv()

});

    

export default modelCreator
