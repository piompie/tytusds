class node{
	constructor(data=null){
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

class bst{

	constructor(){
		this.root=null;
	}

	add(elem){
		var nd = new node(elem);
		if (this.root==null){
			this.root = nd;
			return this.root;
		}else{
			this.insert(this.root, nd)
		}
	}

	insert(node, newNode){
		if (newNode.data < node.data ){
			if(node.left == null){
				node.left = newNode;
			}else{
				this.insert(node.left,newNode);
			}
		}else{
			if(node.right == null){
				node.right = newNode;
			}else
				this.insert(node.right,newNode);
		}

	}


	removeNode(elem,node){
		if (node==null){
			return null;
		}else if(elem < node.data){
			node.left = this.removeNode(elem,node.left);
			return node;

		}else if(elem > node .data){
			node.right = this.removeNode(elem,node.right);
			return node;
		}else{
			if(node.left == null && node.right == null){
				node = null;
				return node;
			}
			if(node.left == null){
				node = node.right;
				return node;
			}else if(node.right == null){
				node=node.left;
				return node;
			}

			var aux = this.maxLeft(node.left);
			node.data = aux.data;
			node.left = this.removeNode(aux.data,node.left);
			return node;
			
		}
	}

	search(elem,node=this.root,rec='0'){
		if (node==null){
			return null;
		}else if(elem < node.data){
			rec=rec+'l'
			return this.search(elem,node.left,rec);
		}else if(elem > node.data){
			rec=rec+'r'
			return this.search(elem,node.right,rec);
		}else{
			return rec;
		}
	}

	maxLeft(node){
		var curr=node;
		while(curr.right!=null){
			curr=curr.right;
		}
		return curr;
	}

	printInorder(node=this.root){
		if(node!=null){
			this.printInorder(node.left);
			console.log(node.data);
			this.printInorder(node.right);
		}
	}

	printPreorder(node=this.root){
		if(node!=null){
			console.log(node.data);
			this.printPreorder(node.left);
			this.printPreorder(node.right);
		}
	}

	printPostorder(node=this.root){
		if(node!=null){
			this.printPostorder(node.left);
			this.printPostorder(node.right);
			console.log(node.data);
		}
	}

}

