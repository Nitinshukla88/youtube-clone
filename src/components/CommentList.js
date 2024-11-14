import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments=[] }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="ml-6 border border-l-black">
            <CommentList comments={comment.replies}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
