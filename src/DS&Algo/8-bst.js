import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import avatar from "../Media/avatar.jpeg"
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "100%",
    color:"black",
  }

}));





function BST() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Binary Search Tree (BST)</h1><br/>
          1. Binary tree with the additional restriction<br/>
2. Restriction:<br/>
A. The left child must always be less than the root node<br/>
B. The right child must always be greater than the root node<br/>
3. Insertion, Deletion, Search is much more efficient than a binary tree<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Maintains order in elements<br/>
2. Can easily find the min and max Nodes in the tree<br/>
3. Inorder traversal gives sorted elements<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Random access not possible<br/>
2. Ordering adds complexity<br/><br/>
</Paper>
        </Grid>


         <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Suitable for sorted hierarchical data<br/>
</Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Binary Search Tree</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
class TLNode{

	int data;
	TLNode left,right;
	
	TLNode(int d)
	{
		data=d;
	}
 }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Insert</h1><br/>
<pre>
    {`
TLNode root;
	
	TLNode insert(int d,TLNode root)
	{
	  if(root==null)
	    root=new TLNode(d);
	  
      else if(d<=root.data)
		root.left=insert(d,root.left);
	
	  else
		root.right=insert(d,root.right);
	
	  return root;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Search</h1><br/>
<pre>
    {`
 		TLNode search(int d,TLNode root)
	{
		if(root.data==d)
			return root;
		else if(d<root.data)
			return search(d,root.left);
	    else
			return search(d,root.right);
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. Inorder</h1><br/>
<pre>
    {`
  	void inorder(TLNode r)
   {
		if(r==null)
		    return;
		
		inorder(r.left);
		System.out.println(r.data);
		inorder(r.right);
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. Delete</h1><br/>
<pre>
    {`
TLNode delete(TLNode root, int data) 
    { 
        
        if (root == null)  return root; 
 
        if (data < root.data) 
            root.left = delete(root.left, data); 
        else if (data > root.data) 
            root.right = delete(root.right, data); 
  
        else
        { 
            
            if (root.left == null) 
                return root.right; 
            else if (root.right == null) 
                return root.left; 
  
            
            root.data = minValue(root.right); 
  
            root.right = delete(root.right, root.data); 
        } 
  
        return root; 
    } 	
}
`}
</pre></Paper>
        </Grid>


<Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VI. Min Value</h1><br/>
<pre>
    {`
   int minValue(TLNode root) 
    { 
        int minv = root.data; 
        while (root.left != null) 
        { 
            minv = root.left.data; 
            root = root.left; 
        } 
        return minv; 
    } 
`}
</pre></Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VII. Input</h1><br/>
<pre>
    {`
 public static void main(String[] args)
   {
		BST ob=new BST();
		ob.root=ob.insert(50,ob.root); 
                ob.root=ob.insert(30,ob.root); 
                ob.root=ob.insert(20,ob.root); 
                ob.root=ob.insert(20,ob.root); 
                ob.root=ob.insert(70,ob.root); 
                ob.root=ob.insert(60,ob.root); 
                ob.root=ob.insert(80,ob.root);    
		ob.root=ob.delete(ob.root,50);
		System.out.println("******" +ob.root.data);
		ob.inorder(ob.root);
		
		TLNode find=ob.search(30,ob.root);
		if(find==null)
			System.out.println("not found");
		else
			System.out.println("found : "+find.data);
	}
`}
</pre></Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VIII. Output</h1><br/>
<pre>
    {`
  Output:
  
******60
20
20
30
60
70
80
found : 30
`}
</pre></Paper>
        </Grid>


      </Grid>



        </div>
    )
}

export default BST

