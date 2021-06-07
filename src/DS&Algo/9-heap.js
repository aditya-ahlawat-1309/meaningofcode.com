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





function Heap() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Heap</h1><br/>
          1. Binary Heap can be visualized array as a complete binary tree<br/>
2. Arr[0] element will be treated as root<br/>
3. length(A) – size of array<br/>
4. heapSize(A) – size of heap<br/>
5. Generally used when we are dealing with minimum and maximum elements<br/><br/>
I.For ith node : -<br/>  
          
          <pre>
    {`
(i-1)/2	             Parent
(2*i)+1	             Left child
(2*i)+2	             Right Child
`}
</pre></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Can be of 2 types: min heap and max heap<br/>
2. Min heap keeps smallest and element and top and max keeps largest <br/>
3. O(1) for dealing with min or max elements<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Random access not possible<br/>
2. Only min or max element is available for accessibility<br/><br/>
</Paper>
        </Grid>


         <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Suitable for applications dealing with priority<br/>
2. Scheduling algorithm<br/>
3. caching<br/>
</Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation Heap</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class Heap{

	int heapSize;
	
	void build_max_heap(int[] a)
	{
		heapSize=a.length;
		for(int i=(heapSize/2);i>=0;i--)
			max_heapify(a,i);
    }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Max-Heap</h1><br/>
<pre>
    {`
void max_heapify(int[] a,int i)
	{
		int l=2*i+1;
		int r=2*i+2;
		int largest=i;
		if(l<heapSize &&a[l]>a[largest])
			largest=l;
		if(r<heapSize &&a[r]>a[largest])
			largest=r;
		if(largest!=i)
		{
			int t=a[i];
			a[i]=a[largest];
			a[largest]=t;
		    max_heapify(a,largest);
		}
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
        <h1 style={{fontSize:"1.15rem"}}>IV. to delete the max element</h1><br/>
<pre>
    {`
  		//to delete the max element
	
	int extract_max(int[] a)
	{
		if(heapSize<0)
			System.out.println("underflow");
		int max=a[0];
		a[0]=a[heapSize-1];
		heapSize--;
		max_heapify(a,0);
		return max;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. Increase Key</h1><br/>
<pre>
    {`
	void increase_key(int[] a,int i,int key)
	{
		if(key<a[i])
			System.out.println("error");
		a[i]=key;
		while(i>=0 && a[(i-1)/2]<a[i])
		{
			int t=a[(i-1)/2];
			a[(i-1)/2]=a[i];
			a[i]=t;
			
			i=(i-1)/2;
		}
	}
`}
</pre></Paper>
        </Grid>


<Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VI. Print Heap</h1><br/>
<pre>
    {`
  	void print_heap(int a[])
	{
		for(int i=0;i<heapSize;i++)
		    System.out.println(a[i]+" ");
	} 
`}
</pre></Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VII. Input</h1><br/>
<pre>
    {`
 public class HeapDemo{
	
	public static void main(String[] args)
	{
		Scanner in=new Scanner(System.in);
		int n=in.nextInt();
		int a[]=new int[n];
		
		System.out.println("enter the elements of array");
		
		for(int i=0;i<n;i++)
		  a[i]=in.nextInt();
	         Heap ob=new Heap();
		
		ob.build_max_heap(a);
		ob.print_heap(a);
		
		System.out.println("maximum element is : "+ob.extract_max(a));
		ob.print_heap(a);
		System.out.println("maximum element is : "+ob.extract_max(a));
		ob.increase_key(a,6,800);
		ob.print_heap(a);
		   
	}
`}
</pre></Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VIII. Min Value</h1><br/>
<pre>
    {`
  Output
7
enter the elements of array
50 100 10 1 3 20 5
100
50
20
1
3
10
5
maximum element is : 100
50
5
20
1
3
10
maximum element is : 50
800
5
20
1
3
`}
</pre></Paper>
        </Grid>


      </Grid>



        </div>
    )
}

export default Heap

