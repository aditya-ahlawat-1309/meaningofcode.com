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





function Stack() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",padding:"35px",fontSize:"1rem",marginLeft:"5px"}}>
      





<Grid container spacing={3}>
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Stack</h1><br/>
          1. Linear Data Structures using Java<br/>
2. Follows LIFO: Last In First Out<br/>
3. Only the top elements are available to be accessed<br/>
4. Insertion and deletion takes place from the top<br/>
5. Eg: a stack of plates, chairs, etc<br/>
6. 4 major operations:<br/>
A. push(ele) – used to insert element at top<br/>
B. pop() – removes the top element from stack<br/>
C. isEmpty() – returns true is stack is empty<br/>
D. peek() – to get the top element of the stack<br/>
7. All operation works in constant time i.e, O(1)<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Maintains data in a LIFO manner<br/>
2. The last element is readily available for use<br/>
3. All operations are of O(1) complexity<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Manipulation is restricted to the top of the stack<br/>
2. Not much flexible<br/><br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
<h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Recursion<br/>
2. Parsing<br/>
3. Browser<br/>
4. Editors<br/></Paper>
        </Grid>
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Stack</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class Stack
{
   int[] a;
   int top;
   Stack()
   {	
	a=new int[100];
	top=-1;
   }
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Push</h1><br/>
<pre>
    {`
  void push(int x)
  {	
	if(top==a.length-1)
	  System.out.println("overflow");
	else
	 a[++top]=x;
   }
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Pop</h1><br/>
<pre>
    {`
   int pop()
   {
     if(top==-1)
		{System.out.println("underflow");
	     return -1;
		}
	 else
	   return(a[top--]);
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
	void display()
	{
		for(int i=0;i<=top;i++)
			System.out.print(a[i]+" ");
		System.out.println();	
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. isEmpty</h1><br/>
<pre>
    {`
	boolean isEmpty()
	{
		if(top==-1)
			return true;
		else 
			return false;
	}
`}
</pre></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VI. Peek</h1><br/>
<pre>
    {`
int peek()
	{
		if(top==-1)
			return -1;
		return (a[top]);
	}
`}
</pre>
          </Paper>
        </Grid>
      

           <Grid item xs={6}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VII. INPUT</h1><br/>
<pre>{`
public class Demo
{   public static void main(String args[])
	{   Stack s=new Stack();
		Scanner in= new Scanner(System.in);
		do
		{    System.out.println("******** MENU *******");
			 System.out.println("1.PUSH");
			 System.out.println("2.POP");
			 System.out.println("3.PEEK");
			 System.out.println("4 IS EMPTY");
			 System.out.println("5.EXIT");
			 System.out.println(" enter ur choice : ");
			 switch(in.nextInt())
				{
				 case 1: 
					 System.out.println("enter the value ");
					 s.push(in.nextInt());
					 break;
				 case 2: 
					System.out.println(" popped element : "+ s.pop());
					 break;
				 case 3: 
					System.out.println(" top element : "+ s.peek());
					 break;
				 case 4: System.out.println(" is empty : "+ s.isEmpty());
						 break;
				 case 5: System.exit(0);
						 break;
				 default: System.out.println(" Wrong Choice!");
						  break;
				}
			 System.out.println(" do u want to cont... ");
			}while(in.nextInt()==1);
        }
    }
          `}</pre>
          </Paper>
        </Grid>


         <Grid item xs={6}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VIII. OUTPUT</h1><br/>
<pre>{`
Output:
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5.EXIT
enter ur choice :
1
enter the value
12
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5.EXIT
enter ur choice :
1
enter the value
56
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5.EXIT
enter ur choice :
2
popped element : 56
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5.EXIT
enter ur choice :
4
is empty : false
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5.EXIT
enter ur choice :
2
popped element : 12
do u want to cont...
          `}</pre>
          </Paper>
        </Grid>



<Grid item xs={12}>
<Paper className={classes.paper}>
<h1 style={{fontSize:"2rem"}}>Stack - using Linked List</h1>
</Paper>
</Grid>
 <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class LNode
{
	 int data;
	 LNode next;
	 LNode(int d)
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
        <h1 style={{fontSize:"1.15rem"}}>II. Push</h1><br/>
<pre>
    {`
  void enqueue(int a)
 class Stack
{
	 LNode push(int d,LNode head){  
		
				LNode tmp1 = new LNode(d);
				
				if(head==null)
				   
					head=tmp1;
				
				else
				{
					tmp1.next=head;
					
					head=tmp1;
				}
				return head;
			 }
			 
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Pop</h1><br/>
<pre>
    {`
 	 LNode pop(LNode head){
		   
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
void display(LNode head){
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
	
`}
</pre>
          </Paper>
        </Grid>



             <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>V. isEmpty</h1><br/>
<pre>
    {`
    boolean isEmpty(LNode head)
	{
		if(head==null)
			return true;
		else
			return false;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>VI. Peek</h1><br/>
<pre>
    {`
	int peek(LNode head)
	{
		if(head==null)
			return -1;
		return head.data;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VII. Input</h1><br/>
<pre>
    {`
public class Demo{
	public static void main(String[] args)
	{ Stack s=new Stack();
		LNode head=null;
		Scanner in=new Scanner(System.in);
		do
		{  System.out.println("******** MENU *******");
			 System.out.println("1.PUSH");
			 System.out.println("2.POP");
			 System.out.println("3.PEEK");
			 System.out.println("4 IS EMPTY"); 
			 System.out.println("5 DISPLAY");
			 System.out.println("6.EXIT");
			 System.out.println(" enter ur choice : ");
			 switch(in.nextInt())
			{
				 case 1: 
					 System.out.println("enter the value ");
					 head=s.push(in.nextInt(),head);
					 break;
				 case 2: 
					 head=s.pop(head);
					 break;
				 case 3: 
				System.out.println(" top element : "+ s.peek(head));
					 break;
				 case 4: 
System.out.println(" is empty : "+ s.isEmpty(head));
						 break;
				 case 5: s.display(head); 
						 break;
				 case 6: System.exit(0);
						 break;
				 default: System.out.println(" Wrong Choice!");
						  break;
				}
			 System.out.println(" do u want to cont... ");
			}while(in.nextInt()==1);
    }
}
`}
</pre></Paper>
        </Grid>


            <Grid item xs={6}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VIII. Output</h1><br/>
<pre>
    {`
Output
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5 DISPLAY
6.EXIT
enter ur choice :
1
enter the value
12
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5 DISPLAY
6.EXIT
enter ur choice :
1
enter the value
56
do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5 DISPLAY
6.EXIT
enter ur choice :
5
list is :
56 12
 do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5 DISPLAY
6.EXIT
enter ur choice :
3
top element : 56
  do u want to cont...
1
******** MENU *******
1.PUSH
2.POP
3.PEEK
4 IS EMPTY
5 DISPLAY
6.EXIT
enter ur choice :
4
is empty : false
do u want to cont...
1
`}
</pre></Paper>
        </Grid>




   
      </Grid>



        </div>
    )
}

export default Stack

