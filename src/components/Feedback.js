import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import "./Feedback.css";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@material-ui/core";
import Comments from "./Comments";

const Feedback = () => {
  const [username, setUsername] = useState("");
  const [coursename, setCoursename] = useState("");
  const [rating, setRating] = useState("");
  //const history = useHistory();
  const [toggleConfirm, setToggleConfirm] = useState(false);

  console.log(username);
  console.log(coursename);
  console.log(rating);
  const handleButton = () => {
    //history.push("/comments");
    console.log("Submit clicked====>");
    setToggleConfirm(true);
  };
  return (
    <>
      {toggleConfirm ? (
        <Comments name={username} course={coursename} rating={rating} />
      ) : (
        <div className="feedback">
          <form className="app__form" onSubmit={handleButton}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="coursename"
              value={coursename}
              onChange={(e) => setCoursename(e.target.value)}
            />
            <div className="radio__group">
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Please Rate Your Course
                </FormLabel>
                <RadioGroup
                  aria-label="rating"
                  name="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <FormControlLabel
                    value="Excellent"
                    control={<Radio />}
                    label="Excellent"
                  />
                  <FormControlLabel
                    value="Good"
                    control={<Radio />}
                    label="Good"
                  />
                  <FormControlLabel
                    value="Fair"
                    control={<Radio />}
                    label="Fair"
                  />
                  <FormControlLabel
                    value="Average"
                    control={<Radio />}
                    label="Average"
                  />
                  <FormControlLabel
                    value="Bad"
                    control={<Radio />}
                    label="Bad"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <button className="btn">SUBMIT</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Feedback;
