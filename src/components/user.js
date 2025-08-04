import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetch = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=0");
    console.log(response);
    setData(response.data);
  };
  const createPost = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
    setData([response.data, ...data]);
     console.log(response);
  
  }
  const [formData, setformData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const handleMultiple = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };
  const deleteData = async (id) => {
   await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, formData);
   setData(data.filter(e=>e.id !== id));
  }           
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <button onclick={() => navigate("/")}>Home</button>

      {data.length > 0 && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <h4>{item.body}</h4>
              <button type="button" onClick={(e) => deleteData(item.id)}>Delete</button>
            </div>
          ))}
        </div>  
      )}

      <div>
        <form onSubmit={(e) => createPost(e)}>
        <div>Judul</div>
        <input name = "title" value={formData.title} onChange={(e) => handleMultiple(e)} />
        <br/>
        <div>Deskripsi</div>
        <input name = "body" value={formData.body} onChange={(e) => handleMultiple(e)} />
        <br/>
        <button type="submit">buttion</button>
        </form>
      </div>
    </div>
  );
}

export default User;
