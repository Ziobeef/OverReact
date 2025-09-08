import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

function Reqres() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const reqres = async () => {
    const response = await axios.get("https://reqres.in/api/users", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    console.log(response.data.data);
    setData(response.data.data);
  };
  const reqPost = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://reqres.in/api/users", formData, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    setData([response.data, ...data]);
    console.log(response);
  };
  const reqPut = async (e) => {
    e.preventDefault();
    const response = await axios.put("https://reqres.in/api/users/${id}", formData, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    setData([response.data, ...data]);
    console.log(response);
  };
  const reqSetdata = async (data) => {
    setIsEditing(true);
    setformData({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      id: data.id,
    });
  };
  const reqDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    setData(data.filter((e) => e.id !== id));
  };
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  useEffect(() => {
    reqres();
  }, []);
  return (
    <>
    <Navbar/>
      <form onSubmit={(e) => reqPost(e)}>
        <h5>
          <label>First Name</label>
          <input type="text" value={formData.first_name} onChange={(e) => setformData({ ...formData, first_name: e.target.value })} />
          <br />
          <label>Last Name</label>
          <input type="text" value={formData.last_name} onChange={(e) => setformData({ ...formData, last_name: e.target.value })} />
          <br />
          <label>Email</label>
          <input type="text" value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} />
          <br />
          <button type="submit">Submit</button>
        </h5>
      </form>
      {data.map((item) => (
        <>
          <button type="button" onClick={() => reqDelete(item.id)}>
            Delete
          </button>
          <button type="submit" onClick={() => reqSetdata(item)}>
            Edit
          </button>

          <div class="d-flex">
            <div>
              <div>{item.id}</div>
              <h4>{item.first_name + " " + item.last_name}</h4>
              <h4>{item?.email}</h4>
            </div>
            <img src={item.avatar} alt={item.first_name} />
          </div>
        </>
      ))}
    </>
  );
}

export default Reqres;
