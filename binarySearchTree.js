class Node{
    constructor(item){
        this.key = item;
        this.left= this.right = null;
    }

}

// Root of the BST
var root = null 

// This method mainly calls insertRec()
function insert(key){
    root = insertRec(root, key)

    }

    function insertRec(root, key )
        // if the root is empty return a new node 
        if  
    }


    swpaEvereryNodeUtil(root, level, k){
        //base case 
    
        if(root==null || (root.left==null && root.right==null) )
        return;
        
        // if level+1 is present in swap vector
        //then we swap left node ands right node
        
        if((level+1) % k==0){
            let temp = root.left
             root.left = root.right 
             root.right = temp
        }

        // recur for left and right node
        swpaEvereryNodeUtil(root.left, level + 1, k)
        swpaEvereryNodeUtil(root.right, level + 1, k ) 

    }




    function inorder(root){
        if(root==null)
        return; 

        inorder(root.left)
        console.log(root.data)
        inorder(root.right)
    }


    function runningMedian(a) {
        // Write your code here

        let i;  
        let n= a.length
        let sorted = new Array(n)
        
        if( a.length == 0)
        return;

        if (a.length==1)
            return parseFloat(a[0])

        if(a.length == 2){
            return parsefloat((a[0]+ a[1])/2)
        }    

        for(i=0; i< a.length; i++){
            
            sorted = sorted.push(a.at(i)).sort()
            
            if(sorted.length % 2== 0){

            } else if(sorted.length !=0){
                runningMedian()
            }


         
        }    
    }
    