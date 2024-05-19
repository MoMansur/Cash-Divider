


class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];

    }
}
const modelSpace= document.getElementById('modelSpace')
export const factoryTreeElements = (() => {

    let treeArray = []


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

    
    function displayTree(root, containerId) {
       
        const treeElement = createTreeElement(root);
        containerId.appendChild(treeElement);
    }



    function setTree(amount, divInto, theDiv) {
        const initialValue = amount;
        const depth = divInto;

        const tree = createDivisionTree(initialValue, depth);
          displayTree(tree, theDiv);

        
         return treeArray
    }

 



    return { treeArray, createTreeElement, createDivisionTree, displayTree, setTree }

})


export default factoryTreeElements







