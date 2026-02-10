import React, { useState } from "react";
const Debug = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [likes, setLikes] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("rahasia123");
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
  const addLike = async () => {
    const newLikes = likes * 100;
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "PATCH",
      body: JSON.stringify({ reactions: newLikes }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    setLikes(newLikes);
  };

  const search = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/search?q=" + keyword, {
        method: "GET",

        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      alert("Error: " + err.message);
    }
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

      <div style={{ border: "2px solid black", padding: "20px", margin: "10px" }}>
        <h2>41. Like Button</h2>
        <p>Jumlah Likes: {likes}</p>
        <button onClick={addLike}>👍 Tambah Like</button>
        <p>
          <i>Tips: Apakah jadinya 11 atau 101?</i>
        </p>
      </div>

      <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
        <h2>44. Cari Produk </h2>
        <input onChange={(e) => setKeyword(e.target.value)} placeholder="Cari..." />
        <button onClick={search}>Search</button>
      </div>

      <div style={{ border: "2px solid purple", padding: "20px", margin: "10px" }}>
        <h2>51. Intip Password (Bug: Logic)</h2>

        <input type={!show ? "password" : "text"} value={pass} onChange={(e) => setPass(e.target.value)} />

        <button onClick={() => setShow(!show)}>{show ? "Sembunyikan" : "Tampilkan"}</button>

        <p>Status: Mode {show ? "Terbuka" : "Tertutup"}</p>
      </div>
    </>
  );
};

export default Debug;
