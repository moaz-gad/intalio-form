import React from "react";
import styles from "./commentBox.module.css";

const CommentBox = ({ comments, onCommentsChange, maxLength = 255 }) => {
  const handleTextChange = (event) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      onCommentsChange(value);
    }
  };

  return (
    <div className={styles.commentBox}>
      <textarea
        value={comments}
        onChange={handleTextChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default CommentBox;
