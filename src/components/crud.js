import React, { useEffect, useState } from "react";
import axios from "axios";

function Crud() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
      name: name,
      username: username,
      email: email,
    });

    setData([
      {
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
      },
      ...data,
    ]);
    console.log(response);
  };
  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
    console.log(response.data);
  };
  const deleteResp = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    const index = data.findIndex((e) => e.id === id);

    if (index !== -1) {
      const dataBaru = data.toSpliced(index, 1);
      setData(dataBaru);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <h1>CRUD Page</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button onClick={() => handleSubmit()}>Submit</button>
        <tabel className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr>
                <td>{c.name}</td>
                <td>{c.username}</td>
                <td>{c.email}</td>
                <button type="button" onClick={() => deleteResp(c.id)}>
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </tabel>
      </div>
    </div>
  );
}

export default Crud;
