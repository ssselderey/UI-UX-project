import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

interface CommentData {
  id: number;
  author: string;
  text: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  const handleCommentSubmit = (author: string, text: string, timestamp: string) => {
    const newComment: CommentData = {
      id: Date.now(),
      author,
      text,
      timestamp,
    };

    setComments([...comments, newComment]);
    console.log(comments);
  };

  const handleCommentDelete = (id: number) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <CommentList comments={comments} onCommentDelete={handleCommentDelete} />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
};
;
export default App;
