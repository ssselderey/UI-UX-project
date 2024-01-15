import React from 'react';
import styled from 'styled-components';

interface CommentProps {
  id: number;
  author: string;
  text: string;
  timestamp: string;
  onDelete: (id: number) => void;
}

const commentStyle: React.CSSProperties = {
  border: '2px solid #673ae0',
  padding: '10px',
  margin: '20px 0px',
  marginTop: '0px',
  borderRadius: '10px',
};

const textStyles: React.CSSProperties = {
  fontSize: '20px',
};

const StyledButton = styled.button`
  margin-left: 10px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.iconColor};
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 0;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.4);
  }
`;

const Comment: React.FC<CommentProps> = ({ id, author, text, timestamp, onDelete }) => {
  return (
    <div style={commentStyle}>
      <strong>{author}:</strong> <span style={textStyles}>{text}</span> - {timestamp}
      <StyledButton onClick={() => onDelete(id)}>
        Delete
      </StyledButton>
    </div>
  );
};

export default Comment;