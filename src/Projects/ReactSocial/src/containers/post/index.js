import React ,{useState , useContext} from 'react';
import { Comment } from '../../components';
import CommentInput from '../../components/comment-input';
import { UserContext } from '../../contexts/user';
import { db, storage } from '../../firebase';
import "./style.css";


export default function Post({profileUrl,
     username , 
     id , 
     photoURL ,
      caption ,
       comments
    }) 
    
    {
    
        const [user, setUser] = useContext(UserContext).user;
   
    const deletePost = () => {
        // delete the imagefrom firebase storage

                                                  
        // get reference to the image file we like to delete
        var imageRef = storage.refFromURL(photoURL);

        // delete the file

        imageRef.delete().then(function(){
            console.log("delete successful");
        }).catch(function(error){
            console.log(`Error ${error}`);
        });

        // step 2 : remove the post info from firebase firestore
        db.collection("posts").doc(id).delete().then(function(){
            console.log("delete post info successful");
        }).catch(function(error){
            console.log(`Error post info delete ${error}`);
        });
    }

    return (
        <div className="post">
        <div className="post_header">
        <div className="post_headerLeft">
            <img src={profileUrl} className="post_profilePic"/>
            <p style={{marginLeft: "8px"}}>{username}</p>
            
        </div>
        </div>  

        <div className="post_center">
            <img className="post_photoUrl" src={photoURL} />
        </div> 


        <div>
            <p>
                <span style={{fontWeight: "500" , marginRight:"4%"}}>{username}</span>
                {caption}
            </p>
        </div>

       


        {comments ? comments.map((comment) =>
         <Comment username={comment.username} caption={comment.comment}/>) : (<></>)} 

          {user ? <CommentInput comments ={comments} id={id}/> : <></> }
        
        </div>
    )
}
