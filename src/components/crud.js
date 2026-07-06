import React, { useEffect, useState } from "react";
import axios from "axios";

function Crud() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nameu, setNameu] = useState("");
  const [usernameu, setUsernameu] = useState("");
  const [emailu, setEmailu] = useState("");
  const [idu, setIdu] = useState("");
  const handleSubmit = async (type) => {
    if (type === 'create') {
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
    } else if (type === 'update') {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${idu}`, {
        name: nameu,
        username: usernameu,
        email: emailu,
      });
      const index = data.findIndex((e) => e.id === idu);
      if (index !== -1) {
        const dataBaru = data.toSpliced(index, 1, response.data);
        setData(dataBaru);
      }
    console.log(response);
  };
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
  const updateResp = async (c) => {
    setNameu(c.name);
    setUsernameu(c.username);
    setEmailu(c.email);
    setIdu(c.id);

  }
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
        <button onClick={() => handleSubmit('create')}>Submit</button>
        <br/>
       <input type="text" value={nameu} onChange={(e) => setNameu(e.target.value)} className="border"/>
        <input type="text" value={usernameu} onChange={(e) => setUsernameu(e.target.value)} className="border"/>
        <input type="text" value={emailu} onChange={(e) => setEmailu(e.target.value)} className="border"/>
        <button onClick={() => handleSubmit('update')}>Update</button>
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
                <button type="button" onClick={() => updateResp(c)}>Update</button>
              </tr>
            ))}
          </tbody>
        </tabel>
      </div>
    </div>
  );
}

export default Crud;
