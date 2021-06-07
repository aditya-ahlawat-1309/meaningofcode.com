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





function Hash() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Hashing</h1><br/>
          1. Uses special Hash function<br/>
2. A hash function maps element to an address for storage<br/>
3. This provides constant-time access<br/>
4. Collision is handled by collision resolution techniques<br/>
5. Collision resolution technique<br/>
A. Chaining<br/>
B. Open Addressing<br/><br/>
</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. The hash function helps in fetching element in constant time<br/>
2. An efficient way to store elements<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Collision resolution increases complexity<br/><br/>
</Paper>
        </Grid>


         <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Suitable for the application needs constant time fetching<br/>
</Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Demonstration Of HashSet - to find string has unique characters</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. isUnique</h1><br/>
<pre>
    {`
class HashSetDemo1{

static boolean isUnique(String s)
{
HashSet<Character> set =new HashSet<Character>();
		
	for(int i=0;i<s.length();i++)
		{
			char c=s.charAt(i);
			if(c==' ')
			continue;
			if(set.add(c)==false)
			return false;
		}
	return true;
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Input</h1><br/>
<pre>
    {`
public static void main(String[] args)
{
String s="helo wqty ";
boolean ans=isUnique(s);
if(ans)
System.out.println("string has unique characters");
else
System.out.println("string does not have unique characters");
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Output</h1><br/>
<pre>
    {`
 Output:
string has unique characters
`}
</pre>
          </Paper>
        </Grid>
        


 <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Demonsstration of HashMap - count the characters in string</h1><br/>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Hash Map</h1><br/>
<pre>
    {`
import java.util.*;
class HashMapDemo
{
    static void check(String s)
	{
		HashMap<Character,Integer> map=new HashMap<Character,Integer>();
		for(int i=0;i<s.length();i++)
			{char c=s.charAt(i);
			 if(!map.containsKey(c))
				map.put(c,1);
			 else
				map.put(c,map.get(c)+1);
			}
		Iterator<Character> itr = map.keySet().iterator();
		while (itr.hasNext()) {
			Object x=itr.next();
			System.out.println("count of "+x+" : "+map.get(x));
		}
	}
	public static void main(String[] args)
	{
		String s="hello";
		check(s);
	}
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Output</h1><br/>
<pre>
    {`
 Output
count of e : 1
count of h : 1
count of l : 2
count of o : 1
`}
</pre>
          </Paper>
        </Grid>



          <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Demonsstration of HashTable - to find string has unique characters</h1><br/>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. Hash Table</h1><br/>
<pre>
    {`
import java.util.*; 
class hashTabledemo { 
	public static void main(String[] arg) 
	{ 
		// creating a hash table 
		Hashtable<Integer, String> h = 
					new Hashtable<Integer, String>(); 

		Hashtable<Integer, String> h1 = 
					new Hashtable<Integer, String>(); 

		h.put(3, "Geeks"); 
		h.put(2, "forGeeks"); 
		h.put(1, "isBest"); 

		// create a clone or shallow copy of hash table h 
		h1 = (Hashtable<Integer, String>)h.clone(); 

		// checking clone h1 
		System.out.println("values in clone: " + h1); 

		// clear hash table h 
		h.clear(); 

		// checking hash table h 
		System.out.println("after clearing: " + h); 
				System.out.println("values in clone: " + h1); 
        } 
} 
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. Output</h1><br/>
<pre>
    {`
Output
values in clone: {3=Geeks, 2=forGeeks, 1=isBest}
after clearing: {}
values in clone: {3=Geeks, 2=forGeeks, 1=isBest}
`}
</pre>
          </Paper>
        </Grid>

      </Grid>



        </div>
    )
}

export default Hash

