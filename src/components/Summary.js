import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    axios.get(" https://nameless-wave-64042.herokuapp.com/").then((res) => {
      console.log(res.data);
      setResponse(res.data);
    });
  }, []);
  const handleClick = () => {
    axios.get("http://localhost:8000/get_excel").then((res) => {
      // console.log(res.data);
      //setResponse(res.data);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Export</button>
      <h1>i m summary</h1>
      {console.log(response)}

      <table>
        <tr>
          <th>Username</th>
          <th>coursename</th>
          <th>rating</th>
          <th>comments</th>
        </tr>

        {response.map((item, idx) => (
          <tr key={item._id}>
            <td>{item.username}</td>
            <td>{item.coursename}</td>
            <td>{item.rating}</td>
            <td>{item.comments}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Summary;
