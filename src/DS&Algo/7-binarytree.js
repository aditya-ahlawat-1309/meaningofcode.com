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





function BinaryTree() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Binary Tree</h1><br/>
          1. Hierarchical  Data Structure<br/>
2. Topmost element is known as the root of the tree<br/>
3. Every Node can have at most 2 children in the binary tree<br/>
4. Can access elements randomly using index<br/>
5. Eg: File system hierarchy<br/>
6. Common traversal methods:<br/>
A. preorder(root) : print-left-right<br/>
B. postorder(root) : left-right-print <br/>
C. inorder(root) : left-print-right<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Can represent data with some relationship<br/>
2. Insertion and search are much efficient<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Sorting is difficult<br/>
2. Not much flexible<br/><br/>
</Paper>
        </Grid>


         <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. File system hierarchy<br/>
2. Multiple variations of the binary tree have a wide variety of applications
<br/><br/>
</Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Binary Tree</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
class TLNode
{
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
        <h1 style={{fontSize:"1.15rem"}}>II. Preorder</h1><br/>
<pre>
    {`
    static void preorder(TLNode r)
   {
		if(r==null)
		    return;
		
		System.out.print(r.data+" ");
		
		preorder(r.left);
		preorder(r.right);
		
   }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Inorder</h1><br/>
<pre>
    {`
 	   static void inorder(TLNode r)
   {
		if(r==null)
		    return;
		
		
		inorder(r.left);
		System.out.print(r.data+" ");
		inorder(r.right);
		
   }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. postorder</h1><br/>
<pre>
    {`
   static void postorder(TLNode r)
   {
		if(r==null)
		    return;
		
		postorder(r.left);
		postorder(r.right);
		System.out.print(r.data+" ");
    }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. Input</h1><br/>
<pre>
    {`
public static void main(String[] args)
	{
		TLNode root=new TLNode(1);
		
		root.left=new TLNode(2);
		root.right=new TLNode(3);
		
		root.left.left=new TLNode(4);
		root.left.right=new TLNode(5);
		
		root.right.left=new TLNode(6);
		root.right.right=new TLNode(7);
		preorder(root);
		System.out.println();
		
		inorder(root);
		System.out.println();
		
		postorder(root);
		System.out.println();
	}
}
`}
</pre></Paper>
        </Grid>


<Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VI. Output</h1><br/>
<pre>
    {`
Output
	
1 2 4 5 3 6 7 
4 2 5 1 6 3 7 
4 5 2 6 7 3 1 

`}
</pre></Paper>
        </Grid>


      </Grid>



        </div>
    )
}

export default BinaryTree

