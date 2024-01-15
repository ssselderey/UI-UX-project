import React from 'react';
import Comment from './Comment'; 

interface CommentData {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

interface CommentListProps {
  comments: CommentData[];
  onCommentDelete: (id: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onCommentDelete }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No comments yet. Write the first comment!</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            text={comment.text}
            timestamp={comment.timestamp}
            onDelete={onCommentDelete}
          />
        ))
      )}
    </div>
  );
};

export default CommentList;
