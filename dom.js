import factoryTreeElements from "./algorithm.js";
import { deleeFunc, treeDisplayer} from "./main.js";
import { groupDuplicates } from "./algorithm.js";



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
        nameSpan.className = 'nameSpanClass'
    
        const typeSpan = document.createElement('span')
        typeSpan.id = 'typeSpan'
        typeSpan.innerText = type;
        typeSpan.className = 'typeSpanClass'
    
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


  
    

         let treeArray = []
       
        //VIEW BUTTON FUNCTION
        const viewEvent = (()=>{
            
            const secondLine = document.createElement('div')
            secondLine.className = 'secondLine'
            getFactoryAlg.setTree(amount,divInto,treeArray)

            let tree= getFactoryAlg.treeArray
          

            function displayNestedArray(arr) {
                arr.forEach(subArray => {
                    // Create a new div for each sub-array
                    const divElement = document.createElement('div');
                    divElement.className = 'CalcDivs'
                    divElement.classList.add('sub-array');
            
                    subArray.forEach(element => {
                        // Create a span for each element in the sub-array
                        const spanElement = document.createElement('button');
                        spanElement.textContent = element;
                        divElement.appendChild(spanElement);
                    });
            
                    secondLine.appendChild(divElement);
                });
            }
//AN EXPORT


             let isOn = true;
             
            viewBtn.addEventListener('click', ()=>{
                if(isOn){
                    card.append(secondLine)

                    //Sorting Array
                    let sortedArray = []
                    const sorting = treeArray.sort((a, b) => b-a)  
                    sortedArray.push(sorting);
                 
                    //The Duplicates Array
                    const duplicatesArray = groupDuplicates(treeArray);


                    //Displayer nested Function
                    displayNestedArray(duplicatesArray);
                  
                    
                console.log(sortedArray)
                console.log(duplicatesArray)
                  
                }else{
            
                    console.log(treeArray)
                    card.removeChild(secondLine) 
                }
                isOn = !isOn
                

                
                
               
                   
                                  
            })
        })();
    })();
    
        

    
   

}

 
   return cardDiv()

});

    

export default modelCreator
