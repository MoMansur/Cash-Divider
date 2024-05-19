const modelSpace= document.getElementById('modelSpace')

//FORM
const form = document.getElementById('form')
const nameInput = document.getElementById('nameInput');
const typeSelect = document.getElementById('typeSelect');
const amountInput = document.getElementById('amountInput');
const divIntoInput = document.getElementById('divIntoInput');




const dataArray = []

class Data{
    constructor(name, type, amount, divInto){
        this.name = name;
        this.type = type;
        this.amount = amount;
        this.divInto = divInto
    }
  
}


let treeArray = []
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];

    }
}

function addBookToLibrary(name, type, amount, divInto){
    const newData = new Data(name, type, amount, divInto)
    modelCreator(name,type,amount,divInto)
    dataArray.push(newData)
}



function createTreeElement(node) {
    const nodeElement = document.createElement('div');
    nodeElement.className = 'node';
    nodeElement.textContent = node.value;
    treeArray.push(node.value)

    if (node.children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'children';

        node.children.forEach(child => {
         
            const childElement = createTreeElement(child);
            childrenContainer.appendChild(childElement);
        });

        nodeElement.appendChild(childrenContainer);
    }

    return nodeElement;
}


function createDivisionTree(value, depth) {
    const root = new TreeNode(value);

    if (depth > 0) {
        const halfValue = value / 2;
        const leftChild = createDivisionTree(halfValue, depth - 1);
        const rightChild = createDivisionTree(halfValue, depth - 1);
        
        root.children.push(leftChild, rightChild);
    }

    return root;
}


console.log(treeArray)

dataArray.push({
    name: 'MY OWN', 
    type: 'debt',
    amount: 100,
    divInto: 4
})


function amountDivider(){

    function maths(amount, divideInto){
        for(let i =0; i<divideInto; i++){
            let all = amount / divideInto
          models(all)
        }
    }


    function models(connect){
        const outerDiv = document.createElement('div')
        outerDiv.id = 'outerDiv'


        const smallDivs = document.createElement('div')
        smallDivs.id= 'smallDivs'
        smallDivs.innerText = connect

        modelSpace.append(outerDiv)
        outerDiv.append(smallDivs)

        
    }
   
    maths(100, 4)
}



function displayer(){

  
    for(let i = 0; i<dataArray.length; i++){
        modelCreator(dataArray[i].name, dataArray[i].type, dataArray[i].amount, dataArray[i].divInto, i)


    }
  
}
displayer()

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    // if(amountInput.value > 100){
    //     divIntoInput.setAttribute('max', 4)
    // }else{
    //     console.lof('fine')
    // }

    addBookToLibrary(nameInput.value, typeSelect.value, amountInput.value, divIntoInput.value)

    modelSpace.innerHTML = "";
    displayer()
    console.log(dataArray)
   })








function modelCreator(name, type, amount, divInto, index){
    
    const bigDiv = document.createElement('div')
    bigDiv.id = 'bigDiv';
    bigDiv.setAttribute(`data-index`, index)

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

    if(amount > 100){
        divIntoInput.setAttribute('max', 4)
    }
    

//BUTTONS

    
    const viewBtn = document.createElement('button')
    viewBtn.id = 'viewbtn'
    viewBtn.className = 'btn btn-success'
    viewBtn.innerText = 'View'
    viewBtn.style.marginRight = '10px'
  

    const deleteButton = document.createElement('button')
    deleteButton.className = 'btn btn-danger'
    deleteButton.innerText = 'Delete Card'



    //FirstDiv

    const firstLine = document.createElement('div')
    firstLine.className = 'firstLine'

//SECOND DIV 

    const secondLine = document.createElement('div')
    secondLine.className = 'secondLine'


    //APENDERS

    modelSpace.append(bigDiv)
    bigDiv.append(firstLine)
    firstLine.append(nameSpan)
    firstLine.append(typeSpan)
    firstLine.append(amountSpan)
    firstLine.append(divIntoSpan)
    firstLine.append(viewBtn)  
    firstLine.append(deleteButton)   

    bigDiv.append(secondLine)

    

    deleteButton.addEventListener('click', (e)=>{
        const index = parseInt(bigDiv.getAttribute("data-index"));
        var confirmToRemove = confirm('Are you sure you want to remove this book')
    
        if(confirmToRemove){
            dataArray.splice(index, 1);
            modelSpace.innerHTML = "";
            displayer()
            console.log(dataArray)
        }else{
            alert('Cancelled')
        }
    })

  

viewBtn.addEventListener('click', () => {

    const index = parseInt(bigDiv.getAttribute("data-index"));

    function displayTree(root) {
        const treeElement = createTreeElement(root);
        secondLine.appendChild(treeElement);

       

        
console.log(treeArray)
    }


    
   
    const initialValue = amount;
    const depth = divInto; 


const tree = createDivisionTree(initialValue, depth);
    displayTree(tree);
});
    




}
modelCreator('Name', 'Type', '100', '4')

// const viewbtn = document.getElementById('viewbtn')




