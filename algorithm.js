

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}




export const factoryTreeElements = (() => {

    class TreeNode {
        constructor(value) {
            this.value = value;
            this.children = [];
        }
    }
    
    function createDivisionTree(value, depth, nodeList) {
        const root = new TreeNode(value);
        nodeList.push(root.value);
    
        if (depth > 0) {
            const halfValue = value / 2;
            const leftChild = createDivisionTree(halfValue, depth - 1, nodeList);
            const rightChild = createDivisionTree(halfValue, depth - 1, nodeList);
            
            root.children.push(leftChild, rightChild);
        }
    
        return root;
    }
    
    function printTree(node, level = 0) {
     
        for (const child of node.children) {
            printTree(child, level + 1);
        }
    }
  
    
    // User input
    
    


    function setTree(amount, divInto, treeArray) {
        const initialValue = amount;
        const depth = divInto;
       

        const tree = createDivisionTree(initialValue, depth, treeArray);

        printTree(tree);

        
         
    }

 



    return {createDivisionTree, setTree }

})

export function groupDuplicates(arr) {
    const groupedArray = [];
    let currentGroup = [];

    for (let i = 0; i < arr.length; i++) {
        if (currentGroup.length === 0 || arr[i] === currentGroup[0]) {
            currentGroup.push(arr[i]);
        } else {
            groupedArray.push(currentGroup);
            currentGroup = [arr[i]];
        }
    }

    // Add the last group to the groupedArray
    if (currentGroup.length > 0) {
        groupedArray.push(currentGroup);
    }

    return groupedArray;
}


export default factoryTreeElements







