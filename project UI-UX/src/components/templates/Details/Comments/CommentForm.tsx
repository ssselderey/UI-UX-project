import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';

interface CommentFormProps {
  onCommentSubmit: (author: string, text: string, timestamp: string) => void;
}

const Input = styled.input<{ isFocused: boolean }>`
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  font-size: 15px;
  width: 80%;
  border-radius: 10px;
  border: 2px solid #673ae0;
  background-color: ${(props) => props.theme.iconColor};
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.4);
  }

  &::placeholder {
    color: ${(props) => (props.isFocused ? 'transparent' : '#6b6b6b')};
    font-size: ${(props) => (props.isFocused ? '16px' : '16px')};
    // filter: ${(props) => (props.isFocused ? 'brightness(0.5)' : 'brightness(0.5)')};
  }
`;

const TextArea = styled.textarea<{ isFocused: boolean }>`
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  font-size: 15px;
  width: 80%;
  resize: none;
  border-radius: 10px;
  border: 2px solid #673ae0;
  background-color: ${(props) => props.theme.iconColor};
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.4);
  }

  &::placeholder {
    color: ${(props) => (props.isFocused ? 'transparent' : '#6b6b6b')};
    font-size: ${(props) => (props.isFocused ? '16px' : '16px')};
    // filter: ${(props) => (props.isFocused ? 'brightness(0.5)' : 'brightness(0.5)')};
  }
`;

const SubmitButton = styled.button`
  // border: "none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.iconColor};
  margin-top: 10px;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.4);
  }
`;

const CommentForm: React.FC<CommentFormProps> = ({ onCommentSubmit }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isAuthorFocused, setAuthorFocused] = useState(false);
  const [isTextFocused, setTextFocused] = useState(false);
  const theme = useTheme();

  const handleAuthorFocus = () => {
    setAuthorFocused(true);
  };

  const handleAuthorBlur = () => {
    setAuthorFocused(false);
  };

  const handleTextFocus = () => {
    setTextFocused(true);
  };

  const handleTextBlur = () => {
    setTextFocused(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && text) {
      const timestamp = new Date().toLocaleString();
      onCommentSubmit(author, text, timestamp);
      setAuthor('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onFocus={handleAuthorFocus}
          onBlur={handleAuthorBlur}
          required
          placeholder="enter  name..."
          isFocused={isAuthorFocused}
        />
        <br />
      </label>
      <br />
      <label>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleTextFocus}
          onBlur={handleTextBlur}
          required
          placeholder="enter comment..."
          isFocused={isTextFocused}
        />
      </label>
      <br />
      <SubmitButton type="submit">Submit Comment</SubmitButton>
    </form>
  );
};

export default CommentForm;
