import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Comments = ({ name, course, rating }) => {
  const [comments, setComments] = useState("");
  const history = useHistory();
  const handleClick = () => {
    axios
      .post(" https://nameless-wave-64042.herokuapp.com/feedback_summary", {
        username: name,
        coursename: course,
        rating: rating,
        comments: comments,
      })
      .then((res) => {
        console.log("successfully posted");
        history.push("/summary");
      })
      .catch((err) => {
        console.log("error occurred");
      });
  };
  return (
    <div className="comments">
      <input type="text" value={name} />
      <input type="text" value={course} />
      <input type="text" value={rating} />
      <input
        type="text"
        placeholder="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Comments;
