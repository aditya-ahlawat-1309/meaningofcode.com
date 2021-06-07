import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import avatar from "../Media/avatar.jpeg"
import { makeStyles } from '@material-ui/core/styles';

import SyntaxHighlighter from 'react-syntax-highlighter';

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





function Array() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
 
<Grid container spacing={3}>
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Arrays</h1><br/>
            1. Linear Data Structure<br/>
2. Elements are stored in contiguous memory locations<br/>
3. Can access elements randomly using index<br/>
4. Stores homogeneous elements i.e, similar elements<br/><br/>
 Syntax:<br/>
Array declaration -<br/><br/>
A. datatype varname []=new datatype[size]; <br/> 
B. datatype[] varname=new datatype[size];<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. Random access<br/>
2. Easy sorting and iteration<br/>
3. Replacement of multiple variables<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Size is fixed<br/>
2. Difficult to insert and delete<br/>
3. If capacity is more and occupancy less, most of the array gets wasted <br/>
4. Needs contiguous memory to get allocated<br/><br/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
<h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. For storing information in a linear fashion<br/>
2. Suitable for applications that require frequent searching<br/></Paper>
        </Grid>
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Implementation of Array</h1><br/>
 <pre>{`
import java.util.*;

    class JavaDemo {
	    public static void main (String[] args) {
	      int[] priceOfPen= new int[5];
	      Scanner in=new Scanner(System.in);
	      for(int i=0;i<priceOfPen.length;i++)
	        priceOfPen[i]=in.nextInt();

	      for(int i=0;i<priceOfPen.length;i++)
		      System.out.print(priceOfPen[i]+" ");
	      }
      }


    Input:
    23 13 56 78 10

    Output:
    23 13 56 78 10 
          `}</pre>

        </div>
    )
}

export default Array