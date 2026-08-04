import axios from "axios";
import React, { useEffect, useState } from "react";

function Testing() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [colour, setColour] = useState("");
  const [namel, setNamel] = useState("");
  const [agel, setAgel] = useState();
  const [colourl, setColourl] = useState("");
  const [ide, setIde] = useState("");
  const handleSubmit = async () => {
    const response = await axios.post("https://crudcrud.com/api/cf84183837f84cbba594329c35285468/kocak", {
      name: name,
      age: age,
      colour: colour,
    });
    setData([
      {
        _id: response.data._id,
        name: response.data.name,
        age: response.data.age,
        colour: response.data.colour,
      },
      ...data,
    ]);
    console.log("setdata=",data);
  };
  const getData = async () => {
    const response = await axios.get("https://crudcrud.com/api/cf84183837f84cbba594329c35285468/kocak");
    setData(response.data);
    console.log("getdata=",response.data);
  };
  const deleteHasil = async (id) => {
    const response = await axios.delete(`https://crudcrud.com/api/cf84183837f84cbba594329c35285468/kocak/${id}`);
    const index = data.findIndex((l) => l._id === id);
    if (index !== -1) {
      const dataBaru = data.toSpliced(index, 1);
      setData(dataBaru);
    } 
  };
  const updateHasil = async (id) => {
    try {
      const response = await axios.put(`https://crudcrud.com/api/cf84183837f84cbba594329c35285468/kocak/${id}`, {
        name: namel,
        age: agel,
        colour: colourl,
      });
      console.log("response:", response);
      if (response.status === 200) {
        getData();
        alert("berhasil update");
      } else {
        alert("gagal update");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("gagal update");
    }
  };
  const updateData = async (l) => {
    setNamel(l.name);
    setAgel(l.age);
    setColourl(l.colour);
    setIde(l._id);
    console.log(l);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" value={colour} onChange={(e) => setColour(e.target.value)} />
        <button onClick={() => handleSubmit()}>Done</button>
        <input type="text" value={namel} onChange={(e) => setNamel(e.target.value)} />
        <input type="text" value={agel} onChange={(e) => setAgel(e.target.value)} />
        <input type="text" value={colourl} onChange={(e) => setColourl(e.target.value)} />
        <button onClick={() => updateHasil(ide)}>Done</button>
      </div>
      <div>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Colour</th>
        </thead>
        <tbody>
          {data.map((l, i) => (
            <tr>
              <td>{l._id}</td>
              <td>{l.name}</td>
              <td>{l.age}</td>
              <td>{l.colour}</td>
              <td>
                <button type="button" onClick={() => deleteHasil(l._id)}>
                  hapus
                </button>
                <button type="button" onClick={() => updateData(l)}>
                  update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default Testing;
