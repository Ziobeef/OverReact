import React, { useEffect, useState } from "react";
import axios from "axios";

function Crud() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
    });
    console.log(response);
  };
  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1>CRUD Page</h1>
        <input type="text" value={title} onChange={(e) => setTitle (e.target.value)} />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        
        <button onClick={() => handleSubmit()}>Submit</button>
        <tabel className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr>
                <td>{c.id}</td>
                <td>{c.title}</td>
                <td>{c.body}</td>
              </tr>
            ))}
          </tbody>
        </tabel>
      </div>
    </div>
  );
}

export default Crud;
