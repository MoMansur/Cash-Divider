import factoryTreeElements from "./algorithm.js";
import { deleeFunc, treeDisplayer} from "./main.js";



const getFactoryAlg = factoryTreeElements()

const modelSpace= document.getElementById('modelSpace')


// //FORM
// const form = document.getElementById('form')
// const nameInput = document.getElementById('nameInput');
// const typeSelect = document.getElementById('typeSelect');
// const amountInput = document.getElementById('amountInput');
// const divIntoInput = document.getElementById('divIntoInput');
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


      function secondLineFunc(){
            const secondLine = document.createElement('div')
            secondLine.className = 'secondLine'
            card.append(secondLine)
        
                getFactoryAlg.setTree(amount,divInto,secondLine)
         
        }
    

         
        //VIEW BUTTON FUNCTION
        const viewEvent = (()=>{
            
            viewBtn.addEventListener('click', ()=>{
                
                function treeShower(){
                    let tree= getFactoryAlg.treeArray
                    console.log(tree)
                }
                treeShower()
                secondLineFunc()
                   
                                  
            })
        })();
    })();
    
        

    
   

}

 
   return cardDiv()

});

    

export default modelCreator
