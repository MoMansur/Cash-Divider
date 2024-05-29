
import { deleeFunc} from "./main.js";
// import { DivisionClickCalculation } from "./main.js";


const modelSpace= document.getElementById('modelSpace')
const getDivisionContainer = document.getElementById('divisionContainer')



    export function factoryDom(type, id, className,value){
        const element = document.createElement(type)
        element.id = id
        element.className = className
        element.value = value

        function appender(card){
            card.append(element)
        }
        

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
        function setWidth(width,height){
            element.style.width = width;
            element.style.height = height;
        }
        function otherCss(border,Rborder, padding,tAlign){
            element.style.border = border
            element.style.borderRadius = Rborder
            element.style.padding = padding
            element.style.textAlign = tAlign
        }
    
        return{element,appender,setBgColor, setInnerText, eventListener,setWidth, otherCss}
    }

 export const modelCreator = ((name, type, amount,  divInto, index, currencySelect)=>{


    const card = document.createElement('div')
    card.id = 'card';
    card.setAttribute(`data-index`, index)
    modelSpace.append(card)

        const firstLineElem = factoryDom('div', 'firstLine', 'firstLine',)   
        const firstLine = firstLineElem.element

        //DATA
        const nameSpan = factoryDom('span', 'nameSpan', 'formDataName')
        nameSpan.setInnerText(name)
        nameSpan.setWidth('550px')
        nameSpan.otherCss('1px solid white')
        nameSpan.setBgColor('black')


        const typeSpan = factoryDom('span','typeSpan', 'formDataType',)
        typeSpan.setInnerText(type)
        if(type === 'Debt'){
            typeSpan.setBgColor('rgb(161 98 7)')
        }else{
            typeSpan.setBgColor('rgb(22 78 99)')
        }

        const amountSpan = factoryDom('span','amountSpan', 'formDataAmount')
        amountSpan.setInnerText(currencySelect+amount)  

        const divIntoSpan = factoryDom('span','divIntoSpan', 'formDataSpan')
        divIntoSpan.setInnerText(divInto)
        divIntoSpan.setWidth('80px')
     
    
        //SECOND LINE
        const secondLineElement = factoryDom('div', 'secondLine', 'secondLine',)
        const secondLine = secondLineElement.element

        const cardStats = factoryDom( 'div', 'cardStats', 'cardStats')
        const getCardStats = cardStats.element
           
          
    
            //Delete Button
           const deleteButton =factoryDom('button', 'DeleteBtn', 'btn btn-danger',)
           deleteButton.setInnerText('Delete Card')
        
            deleteButton.eventListener(() => {
                deleeFunc(card); 
            });

               
        const divisionContainer = factoryDom('div', 'divisionContainer', 'divisionContainer')
        const getDivisionContainer = divisionContainer.element 

        
    const statusSpan = factoryDom( 'p', 'statusSpan', 'statusSpan')
    statusSpan.setBgColor('black')
    statusSpan.setWidth('300px','50px')
    statusSpan.otherCss('1px solid white', '10px', '5px','center' )

    statusSpan.setInnerText(`${currencySelect}`)
    statusSpan.appender(getCardStats)



 const  calc = () =>{
    const calcArr = [];

     let sum = Math.round(amount / divInto)
    for (let i = 0; i < divInto; i++) {
        calcArr.push(sum);
    } 

    getDivisionContainer.innerHTML = '';
   
    for (let j = 0; j < calcArr.length; j++) {
        const eachDivision = factoryDom('span', 'division', 'division')
        eachDivision.setInnerText(`${currencySelect}${calcArr[j]}`)
        eachDivision.appender(getDivisionContainer)
        eachDivision.element.value = calcArr[j]
        eachDivision.element.setAttribute('data-index', j)
    }

    element()
}


const element = ()=>{



let isClicked = true
let total = 0;
           
    const calcArrS = Array.from(getDivisionContainer.getElementsByClassName('division'));
    
    calcArrS.forEach(element => {
        element.style.cursor = 'pointer';
        element.clickCount = 0; 
            element.addEventListener('click', () => {
            element.clickCount++; 
        
            if (element.clickCount % 2 === 1) { 
                total += element.value
                element.style.backgroundColor = 'green';

                statusSpan.setInnerText(total)          
            } else {
                total -= element.value
                element.style.backgroundColor = '';  
                statusSpan.setInnerText(total)         
             }
        })
    
        
    });
     
    
        }

        calc()
       

   
          
          const DOMbgColors = () =>{}
        
          DOMbgColors()

          const DOMappenders = () =>{
            firstLineElem.appender(card)
            nameSpan.appender(firstLine)
            typeSpan.appender(firstLine)
            amountSpan.appender(firstLine)
            divIntoSpan.appender(firstLine)


            secondLineElement.appender(card)
            divisionContainer.appender(secondLine)

            cardStats.appender(secondLine)

            deleteButton.appender(getCardStats)



          }

    


          DOMappenders()
     

return {statusSpan}

});

    


export default modelCreator
