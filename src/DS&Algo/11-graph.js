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





function Graph() {

const classes = useStyles();

    return (
        <div style={{backgroundColor:"white",fontSize:"1rem",padding:"35px",marginLeft:"5px"}}>
      
<Grid container spacing={3}>
       
        <Grid item xs={4}>
          <Paper className={classes.paper}>  <h1 style={{fontSize:"2rem"}}>Graph</h1><br/>
          1. Basically it is a group of edges and vertices<br/>
2. Graph representation<br/>
A. G(V, E); where V(G) represents a set of vertices and E(G) represents a set of edges<br/>
3. The graph can be directed or undirected<br/>
4. The graph can be connected or disjoint<br/>  <br/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><h1 style={{fontSize:"1.5rem"}}>Advantages</h1><br/>
1. finding connectivity<br/>
2. Shortest path<br/>
3. min cost to reach from 1 pt to other<br/>
4. Min spanning tree<br/><br/>
<h1 style={{fontSize:"1.5rem"}}>Disadvantages</h1><br/>
1. Storing graph(Adjacency list and Adjacency matrix) can lead to complexities<br/><br/></Paper>
        </Grid>


            <Grid item xs={4}>
          <Paper className={classes.paper}>

<h1 style={{fontSize:"1.5rem"}}>Applications</h1><br/>
1. Suitable for a circuit network<br/>
2. Suitable for applications like Facebook, LinkedIn, etc<br/>
3. Medical science<br/><br/></Paper>
        </Grid>
     
        
      </Grid>

     <br/><br/>
     <h1 style={{fontSize:"1.5rem"}}>Demonstration of Graph</h1><br/>

 <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h1 style={{fontSize:"1.15rem"}}>I. Declaration</h1><br/>
<pre>
    {`
import java.util.*;

class Graph
{
	int v;
	LinkedList<Integer> adj[];

	Graph(int v)
	{
		this.v=v;
		adj=new LinkedList[v];
		for(int i=0;i<v;i++)
			adj[i]=new LinkedList<Integer>();
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>II. addEdge</h1><br/>
<pre>
    {`
 void addEdge(int u,int v)
	{
		adj[u].add(v);
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>III. BFS</h1><br/>
<pre>
    {`
void BFS(int s)
{
	boolean[] visited=new boolean[v];
	LinkedList<Integer> q=new LinkedList<Integer>();
	q.add(s);
	visited[s]=true;

	while(!q.isEmpty())
	{
		int x=q.poll();
		System.out.print(x+" ");

	Iterator<Integer> itr=adj[x].listIterator();
		while(itr.hasNext())
		{
			int p=itr.next();
			if(visited[p]==false)
			{
				visited[p]=true;
				q.add(p);
			}
		}
	}
}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <h1 style={{fontSize:"1.15rem"}}>IV. DFSUtil</h1><br/>
<pre>
    {`
void DFSUtil(int s,boolean[] visited)
	{
		visited[s]=true;
		System.out.println(s);

	Iterator<Integer> itr=adj[s].listIterator();
		while(itr.hasNext())
		{
			int x=itr.next();
			if(visited[x]==false)
			{                                                        
				//visited[x]=true;

				DFSUtil(x,visited);
			} 
		}
	}
`}
</pre>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>V. DFS</h1><br/>
<pre>
    {`
void DFS(int s){
		boolean visited[]=new boolean[v];
		DFSUtil(s,visited);
	}
`}
</pre></Paper>
        </Grid>

          <Grid item xs={4}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VI. </h1><br/>
<pre>
    {`
public static void main(String[] args)
		{
			Graph g=new Graph(4);
			g.addEdge(0,1);
			g.addEdge(0,2);
			g.addEdge(1,2);
			g.addEdge(2,0);
			g.addEdge(2,3);
			g.addEdge(3,3);
			
			g.BFS(2);
			g.DFS(2);

		}
`}
</pre></Paper>
        </Grid>

          <Grid item xs={12}>
          <Paper className={classes.paper}>   
          <h1 style={{fontSize:"1.15rem"}}>VII. Output</h1><br/>
<pre>
    {`
Output:
2 0 3 1 2
0
1
3
`}
</pre></Paper>
        </Grid>








      </Grid>



        </div>
    )
}

export default Graph

