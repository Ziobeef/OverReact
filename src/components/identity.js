import axios from "axios";
import React, { useEffect } from "react";

function Identity() {
  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [idl, setIdl] = React.useState("");
  const [namel, setNamel] = React.useState("");
  const [addressl, setAddressl] = React.useState("");
  const [agel, setAgel] = React.useState("");
  const [genderl, setGenderl] = React.useState("");

  const handleForm = async (type) => {
    if (type === "create") {
      const response = await axios.post("https://sheetdb.io/api/v1/uthxirp5ujyfe", {
        data: {
          id: id,
          name: name,
          address: address,
          age: age,
          gender: gender,
        },
      });

      if (response.status === 201) {
        setData([
          {
            id: response.data.id,
            name: response.data.name,
            address: response.data.address,
            age: response.data.age,
            gender: response.data.gender,
          },
        ]);
        getData();
      } else {
        return alert("Failed to create data");
      }
    } else if (type === "update") {
      const response = await axios.put(`https://sheetdb.io/api/v1/uthxirp5ujyfe/id/${idl}`, {
        id: idl,
        name: namel,
        address: addressl,
        age: agel,
        gender: genderl,
      });
      // const index = data.findIndex((e) => e.id === idl);
      // if (index !== -1) {
      //   const dataBaru = data.toSpliced(index, 1, response.data);
      // setData(dataBaru);
      // }
       getData();
    }
  };
  const getData = async () => {
    const response = await axios.get("https://sheetdb.io/api/v1/uthxirp5ujyfe");
    setData(response.data);
  };
  const handleUpdate = async (identity) => {
    setIdl(identity.id);
    setNamel(identity.name);
    setAddressl(identity.address);
    setAgel(identity.age);
    setGenderl(identity.gender);
    console.log(identity);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1>Account's Identity</h1>
      <label>ID</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <label>Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Address</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <label>Age</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <label>Gender</label>
      <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      <br />
      <button onClick={() => handleForm("create")}>Create Submit</button>
      <div>
        <br />
        <label>ID</label>
        <input type="text" value={idl} onChange={(e) => setIdl(e.target.value)} />
        <br />
        <label>Name</label>
        <input type="text" value={namel} onChange={(e) => setNamel(e.target.value)} />
        <br />
        <label>Address</label>
        <input type="text" value={addressl} onChange={(e) => setAddressl(e.target.value)} />
        <br />
        <label>Age</label>
        <input type="text" value={agel} onChange={(e) => setAgel(e.target.value)} />
        <br />
        <label>Gender</label>
        <input type="text" value={genderl} onChange={(e) => setGenderl(e.target.value)} />
        <br />
        <button onClick={() => handleForm("update")}>Update Submit</button>
        <div></div>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((identity, i) => (
            <tr>
              <td>{identity.id}</td>
              <td>{identity.name}</td>
              <td>{identity.address}</td>
              <td>{identity.age}</td>
              <td>{identity.gender}</td>
              <button type="button" onClick={() => handleUpdate(identity)}>
                Update
              </button>
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}

export default Identity;
