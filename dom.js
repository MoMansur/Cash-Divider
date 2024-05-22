
import { calc, deleeFunc} from "./main.js";
import { DivisionClickCalculation } from "./main.js";


const modelSpace= document.getElementById('modelSpace')
const getCalcDiv = document.getElementById('CalcDivs')



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


        const typeSpan = factoryDom('span','typeSpan', 'formDataSpan',)
        typeSpan.setInnerText(type)
        if(type === 'Debt'){
            typeSpan.setBgColor('rgb(161 98 7)')
        }else{
            typeSpan.setBgColor('rgb(22 78 99)')
        }

        const amountSpan = factoryDom('span','amountSpan', 'formDataSpan')
        amountSpan.setInnerText(currencySelect+amount)  

        const divIntoSpan = factoryDom('span','divIntoSpan', 'formDataSpan')
        divIntoSpan.setInnerText(divInto)
        divIntoSpan.setWidth('80px')
     
    
        //SECOND LINE
        const secondLineElement = factoryDom('div', 'secondLine', 'secondLine',)
        const secondLine = secondLineElement.element

        const cardStats = factoryDom( 'div', 'cardStats', 'cardStats')
        const getCardStats = cardStats.element
           
            const statusSpan = factoryDom( 'p', 'statusSpan', 'statusSpan')
            statusSpan.setBgColor('black')
            statusSpan.setWidth('300px','50px')
            statusSpan.otherCss('1px solid white', '10px', '5px','center' )
    
            //Delete Button
           const deleteButton =factoryDom('button', 'DeleteBtn', 'btn btn-danger',)
           deleteButton.setInnerText('Delete Card')
        
            deleteButton.eventListener(() => {
                deleeFunc(card); 
            });


     
           
        const calcDiv = factoryDom('div', 'CalcDivs', 'CalcDivs')
        const getCalcDiv = calcDiv.element 

        let total = 0;
          const divisionProcessCard = (()=>{
            statusSpan.setInnerText(`${currencySelect}${total} /${currencySelect}${amount}`)
       
          
            getCalcDiv.addEventListener('click', (event) => {

                DivisionClickCalculation(event, statusSpan, currencySelect, total, amount)
                
                    })

                    calc(amount, divInto, getCalcDiv, currencySelect)

   

          })()
          
          const DOMbgColors = () =>{}
        
          DOMbgColors()

          const DOMappenders = () =>{
            firstLineElem.appender(card)
            nameSpan.appender(firstLine)
            typeSpan.appender(firstLine)
            amountSpan.appender(firstLine)
            divIntoSpan.appender(firstLine)


            secondLineElement.appender(card)
            calcDiv.appender(secondLine)

            cardStats.appender(secondLine)

            statusSpan.appender(getCardStats)
            deleteButton.appender(getCardStats)



          }

    


          DOMappenders()
     

return {divisionProcessCard}

});

    


export default modelCreator
