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





function Queue() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={6}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Queue- using Array</h1><br/>
          1. Linear Data Structure<br/>
2. Follows FIFO: First In First Out<br/>
3. Insertion can take place from the rear end.<br/>
4. Deletion can take place from the front end.<br/>
5. Eg: queue at ticket counters, bus station<br/>
6. 4 major operations:<br/>
A. enqueue(ele) – used to insert element at top<br/>
B. dequeue() – removes the top element from queue <br/>
C. peekfirst() – to get the first element of the queue <br/>
D. peeklast() – to get the last element of the queue <br/>
7.All operation works in constant time i.e, O(1)<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Maintains data in FIFO manner<br/>
2. Insertion from beginning and deletion from end takes O(1) time<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Scheduling<br/>
2. Maintaining playlist<br/>
3. Interrupt handling<br/><br/></Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Queue</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class Queue{

 int front;
 int rear;
 int[] arr;
 
 Queue()
 {
   front=rear=-1;
   arr=new int[10];
  }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Enqueue</h1><br/>
<pre>
    {`
  void enqueue(int a)
  {
    if(rear==arr.length-1)
		System.out.println("overflow");
	else
		arr[++rear]=a;
	
	if(front==-1)
		front++;
   }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Dequeue</h1><br/>
<pre>
    {`
 	   int dequeue()
   {
     int x=-1;
	 if(front==-1)
		System.out.println("underflow");
	 else
		x=arr[front++];
	 if(rear==0)
	     rear--;
	 return x;
    }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. Input</h1><br/>
<pre>
    {`
void display()
	{
	  for(int i=front;i<=rear;i++)
		System.out.print(arr[i]+" ");
System.out.println();
   }
}
public class QueueDemo{
public static void main(String[] args)
	{
	  Queue ob=new Queue();
	  ob.enqueue(1);
	  ob.enqueue(2);
	  ob.enqueue(3);
	  ob.enqueue(4);
	  ob.enqueue(5);
	  ob.display();
	  ob.dequeue();
	  ob.display();
	 }
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. Output</h1><br/>
<pre>
    {`
Output:


1 2 3 4 5 
2 3 4 5 
`}
</pre></Paper>
        </Grid>







<Grid item xs={12}>
<Paper className={classes.paper}>
<h1 style={{fontSize:"2rem"}}>Queue - using Linked List</h1>
</Paper>
</Grid>
 <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
class LNode{
	
	int data;
	LNode next;

	LNode(int d)
	{
		data=d;
	}
}
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Enqueue</h1><br/>
<pre>
    {`
		 LNode enqueue(LNode head,int a)
	{
		LNode tmp=new LNode(a);
		if(head==null)
			head=tmp;
		else
		 { 
			LNode tmp1=head;
			while(tmp1.next!=null)
				tmp1=tmp1.next;
			tmp1.next=tmp;
		}
		return head;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Dequeue</h1><br/>
<pre>
    {`
LNode dequeue(LNode head)
	{
		if(head==null)
		        System.out.println("underflow");
		   else
				head=head.next;
			return head;
	}
`}
</pre>
          </Paper>
        </Grid>




             <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. Display</h1><br/>
<pre>
    {`
void display(LNode head)
	{
	System.out.println(" list is : ");
			if(head==null){
			System.out.println("no LNodes");
			 return;
		}
		LNode tmp=head;
      while(tmp!=null){
			System.out.print(tmp.data+" ");
			tmp=tmp.next;
	 }
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
public class QueueDemoLL{
		
		public static void main(String[] args)
		{
			Queue ob=new Queue();
			LNode head=null;
			
			head=ob.enqueue(head,1);
			head=ob.enqueue(head,2);
			head=ob.enqueue(head,3);
			head=ob.enqueue(head,4);
			head=ob.enqueue(head,5);
			ob.display(head);
			head=ob.dequeue(head);
			ob.display(head);
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

list is : 
1 2 3 4 5 
list is : 
2 3 4 5 
`}
</pre></Paper>
        </Grid>




 
      </Grid>



        </div>
    )
}

export default Queue

