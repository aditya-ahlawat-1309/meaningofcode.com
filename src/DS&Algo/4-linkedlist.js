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





function List() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      





<Grid container spacing={3}>
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Linked List</h1><br/>
           1. Linear Data Structure<br/>
2. Elements can be stored as per memory availability<br/>
3. Can access elements on linear fashion only<br/>
4. Stores homogeneous elements i.e, similar elements<br/>
5. Dynamic in size<br/>
6. Easy insertion and deletion<br/> 
7. Starting element or Node is the key which is generally termed as head.<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Dynamic in size<br/>
2. No wastage as capacity and size is always equal<br/>
3. Easy insertion and deletion as 1 link manipulation is required<br/>
4. Efficient memory allocation<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. If head Node is lost, the linked list is lost<br/>
2. No random access possible<br/><br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
<h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Suitable where memory is limited<br/> 
2. Suitable for applications that require frequent insertion and deletion<br/></Paper>
        </Grid>
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Linked List</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class LLNode{

	int data;
	LLNode next;
	
	LLNode(int data)
	{
		this.data=data;
		this.next=null;
		
	}
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Insert in Beg</h1><br/>
<pre>
    {`
class Demo{
	
	LLNode head;
	
	
	LLNode insertInBeg(int key,LLNode head)
	{
		LLNode ttmp=new LLNode(key);
		
		if(head==null)
			head=ttmp;
		
		else
			{
				ttmp.next=head;
				head=ttmp;
			}
		return head;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Insert in End</h1><br/>
<pre>
    {`
    	
LLNode insertInEnd(int key,LLNode head)
{
	LLNode ttmp=new LLNode(key);
	LLNode ttmp1=head;
		
	if(ttmp1==null)
		head=ttmp;
	else
	{
		while(ttmp1.next!=null)
			ttmp1=ttmp1.next;
			ttmp1.next=ttmp;
			
	}
		
	return head;
			
}

`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. Insert in Pos</h1><br/>
<pre>
    {`
LLNode insertAtPos(int key,int pos,LLNode head)
{
	LLNode ttmp=new LLNode(key);
		
	if(pos==1)
	{
		ttmp.next=head;
		head=ttmp;
	}
	else
	{
		LLNode ttmp1=head;
		for(int i=1;ttmp1!=null && i<pos;i++)
			ttmp1=ttmp1.next;
		ttmp.next=ttmp1.next;
		ttmp1.next=ttmp;
	}
		
	return head;
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
LLNode delete(int pos,LLNode head)
	{
		LLNode ttmp=head;
		if(pos==1)
			head=ttmp.next;
		else
		{
		for(int i=1;ttmp!=null && i<pos-1;i++)
				ttmp=ttmp.next;
			ttmp.next=ttmp.next.next;
		}
		return head;
	}
`}
</pre></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VI. Find Length</h1><br/>
<pre>
    {`
	int length(LLNode head)
	{
		LLNode ttmp=head;
		int c=0;
		if(ttmp==null)
			return 0;
		else
		{
		 while(ttmp!=null)
			{	ttmp=ttmp.next;
				c++;
			}
		}
		return c;
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VII. Reverse</h1><br/>
<pre>
    {`
LLNode reverse(LLNode head)
	{
		LLNode prevLNode=null,curLNode=head,nextLNode=null;
		while(curLNode!=null)
		{
			nextLNode=curLNode.next;
			curLNode.next=prevLNode;
			
			prevLNode=curLNode;
			curLNode=nextLNode;
		}
		
		head=prevLNode;
		return head;
	}
`}
</pre>
          </Paper>
        </Grid>

           <Grid item xs={6}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>VIII. INPUT</h1><br/>
<pre>{`
void display(LLNode head)
{   LLNode ttmp=head;
	while(ttmp!=null)
		{System.out.print(ttmp.data+" ");
			ttmp=ttmp.next;
		}
	}
public static void main(String[] args)
{   LinkedListDemo l=new LinkedListDemo();
		l.head=null;
		Scanner in=new Scanner(System.in);
do
{    System.out.println("********* MENU *********");
	 System.out.println("1.Insert In End");
	 System.out.println("2.Insert In Beg");
	 System.out.println("3.Insert At A  Particular Pos");
	 System.out.println("4.Delete At a Pos");
	 System.out.println("5.Length");
	 System.out.println("6.Reverse");
	 System.out.println("7.Display");
	 System.out.println("8.EXIT");
	 System.out.println("enter ur choice : ");
	 int n=in.nextInt();
	 switch(n)
	{    case 1: System.out.println("enter the value ");
			  l.head=l.insertInEnd(in.nextInt(),l.head);
			 break;
		 case 2: System.out.println("enter the value");
			 l.head=l.insertInBeg(in.nextInt(),l.head);
			 break;
		 case 3: System.out.println("enter the value");
			 l.head=l.insertAtPos(in.nextInt(),in.nextInt(),l.head);
			 break;
		 case 4: 
			 l.head=l.delete(in.nextInt(),l.head);
			 break;
		 case 5: 
			System.out.println(l.length(l.head));
			 break;
		 case 6: 
			 l.head=l.reverse(l.head);
			 break;
		 case 7: 
			l.display(l.head);
		 		 break;
		 case 8: System.exit(0);
		 		 break;
		 default: System.out.println(" Wrong Choice!");
		 		  break;
		}
	 System.out.println(" do u want to cont... ");
	}while(in.nextInt()==1);

 }
}
`}
</pre>
          </Paper>
        </Grid>

           <Grid item xs={6}>
          <Paper className={classes.paper}>
                 <h1 style={{fontSize:"1.15rem"}}>IX. OUTPUT</h1><br/>
 
 <pre>{`
Output:
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
1
enter the value
23
 do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
1
enter the value
56
 do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
2
enter the value
10
 do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
7
10 23 56
 do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
3
enter the value
67
2
do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
7
10 23 67 56
 do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
4
2
do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
7
10 67 56
 do u want to cont...
1
******** MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
6
do u want to cont...
1
********* MENU *********
1.Insert In End
2.Insert In Beg
3.Insert At A  Particular Pos
4.Delete At a Pos
5.Length
6.Reverse
7.Display
8.EXIT
enter ur choice :
7
56 67 10
 do u want to cont...
          `}</pre>
          </Paper>
        </Grid>

   
      </Grid>



        </div>
    )
}

export default List

