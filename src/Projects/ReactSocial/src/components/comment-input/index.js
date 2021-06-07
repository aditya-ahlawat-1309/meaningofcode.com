import React,{useState , useContext} from 'react';
import { UserContext } from '../../contexts/user';
import { db } from '../../firebase';
import "./style.css";


export default function CommentInput({comments, id }) {
    

    const [user, setUser] = useContext(UserContext).user;
    const [comment, setComment] = useState("");
    
    const [commentArray, setCommentArray] = useState(comments ? comments : []);

    const addComment = () => {
        // Add comment to post info
       if(comment != ""){
           
        commentArray.push({
            comment: comment,
            username: user.email.replace("@gmail.com","").toLowerCase(),
        });

        db.collection("posts")
        .doc(id)
        .update({
            comments: commentArray, 
        }).then(function(){
            console.log("comment added")
          
        }).catch(function (error){
            console.log(`Error ${error}`);
 
        });
       }

    };
    
    return (
        <div className="commentInput">
            <textarea rows="1"
            className="commentInput_textarea"
            placeholder="Write a comment ..."
            value={comment}
            onChange = {(e) => setComment(e.target.value)}
            >
            </textarea>

            <button 
            onClick={addComment}
            className="commentInput_btn">Post</button>
        </div>
    )
}
