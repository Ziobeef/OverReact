import React, { useState } from "react";
const Debug = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleDelete = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert(`User 1 dihapus!`);
    } else {
      alert("Gagal! API butuh ID (angka), bukan Nama.");
    }
  };
  const register = async () => {
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify({ email: email, password: "cityslicka" }),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    alert("Hasil: " + JSON.stringify(data));
  };

  return (
    <>
      <div style={{ border: "2px solid maroon", padding: "20px", margin: "10px" }}>
        <h2>37. Hapus User (Bug: Name vs ID)</h2>
        <input placeholder="Masukkan Nama User (cth: Leanne)" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleDelete}>Hapus</button>
        <p>Tips: Coba masukkan angka 1, pasti berhasil.</p>
      </div>

      <div style={{ border: "2px solid fuchsia", padding: "20px", margin: "10px" }}>
        <h2>40. Registrasi </h2>
        <input placeholder="Email (eve.holt@reqres.in)" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={register}>Daftar</button>
      </div>
    </>
  );
};

export default Debug;
