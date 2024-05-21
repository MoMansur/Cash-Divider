
import { calc, deleeFunc} from "./main.js";
import { getCalcArr } from "./main.js";




const modelSpace= document.getElementById('modelSpace')
const getCalcDiv = document.getElementById('CalcDivs')



     function factoryDom(card, type, id, className, ){
        const element = document.createElement(type)
        element.innerText = name;
        element.id = id
        element.className = className
     

        card.append(element)

        function setInnerText(innerText){
            element.innerText = innerText
        }
        
        function setBgColor(bgColor){
            element.style.backgroundColor = bgColor
        }

        function eventListener(eventFunction) {
            element.addEventListener('click', () => {
                eventFunction();
            });
        }
        function setWidth(width){
            element.style.setWidth = width;
        }
    
        return{element,setBgColor, setInnerText, eventListener,setWidth}
    }

 export const modelCreator = ((name, type, amount, divInto, index)=>{


    const card = document.createElement('div')
    card.id = 'card';
    card.setAttribute(`data-index`, index)

    modelSpace.append(card)

 
        const firstLineElem = factoryDom(card, 'div', 'firstLine', 'firstLine',)
    
       
        const firstLine = firstLineElem.element

        //DATA
        const nameSpan = factoryDom(firstLine, 'span', 'nameSpan', 'formDataSpan')
        nameSpan.setInnerText(name)
        const typeSpan = factoryDom(firstLine,  'span','typeSpan', 'formDataSpan',)
        typeSpan.setInnerText(type)

        const amountSpan = factoryDom(firstLine,  'span','amountSpan', 'formDataSpan')
        amountSpan.setInnerText(amount)  
        const divIntoSpan = factoryDom(firstLine,  'span','divIntoSpan', 'formDataSpan')
        divIntoSpan.setInnerText(divInto)
        //BUTTONS
        const viewBtn = factoryDom(firstLine, 'viewbtn', 'DeleteBtn', 'btn btn-success')
        viewBtn.setInnerText('Status')
         //Delete Button
        const deleteButton =factoryDom(firstLine, 'button', 'DeleteBtn', 'btn btn-danger',)
        deleteButton.setInnerText('Delete Card')
       
        deleteButton.eventListener(() => {
            deleeFunc(card); 
        });
      
        
   


  //SECOND LINE
        const secondLineElement = factoryDom(card, 'div', 'secondLine', 'secondLine',)
      
       
        const secondLine = secondLineElement.element

        const calcInformations = factoryDom(secondLine,  'div','CalcInfo', 'CalcInfo',)
        calcInformations.setInnerText('Information here')
     

        const spanData = document.createElement('span')
        spanData.className - 'spanData'
        spanData.innerText = amount
        spanData.style.backgroundColor = 'Green'
        
        
           
          

            const calcDiv = factoryDom(secondLine, 'div', 'CalcDivs', 'CalcDivs')
            const getCalcDiv = calcDiv.element 

            const cardtStats = factoryDom(secondLine, 'div', 'cardtStats', 'cardtStats')
            


            getCalcDiv.addEventListener('click', (e)=>{
                const theNode = e.target;
                const theNumber = parseInt(theNode.textContent)

                console.dir(theNode)

                let isOn = true

                if(isOn){
                    getCalcDiv.style.backgroundColor = 'green'
                }else{
                    getCalcDiv.style.backgroundColor = 'red'
                }
                 isOn = !isOn


            })

            function statsCollection(){

            }
            
            console.log(amount)
            

            
       

calc(amount, divInto, getCalcDiv)

        



});

    


export default modelCreator
