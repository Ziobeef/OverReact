import React, { useState } from "react";
const Debug = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [likes, setLikes] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("rahasia123");
  const [nilai, setNilai] = useState(0);
  const [grade, setGrade] = useState("-");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("Terkunci");
  const [angka, setAngka] = useState(0);
  const [jenis, setJenis] = useState("-");
  const [warna, setWarna] = useState("");
  const [aksi, setAksi] = useState("-");
  const [price, setPrice] = useState(100000);
  const [disc, setDisc] = useState(0.1);
  const [final, setFinal] = useState(0);
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [msg, setMsg] = useState("");
  const [sisi, setSisi] = useState(0);
  const [luas, setLuas] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const peserta = ["Ahmad", "Budi", "Cindy", "Dewi", "Eka"];
  const [pemenang, setPemenang] = useState();
  const [count, setCount] = useState(0);
  const max = 5;

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
  const hitungLuas = (s) => {
    const hasil = s * s;
    return hasil;
  };
  const tambah = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const acakPemenang = () => {
    const nomorAcak = Math.ceil(Math.random() * peserta.length) - 1;
    setPemenang(peserta[nomorAcak]);
  };

  const toggle = () => {
    setIsOn(!isOn);
  };

  const tombolKlik = () => {
    const jawaban = hitungLuas(sisi);
    setLuas(jawaban);
  };

  const check = () => {
    if (p1 !== p2) {
      setMsg("Error: Password Tidak Cocok!");
    } else {
      setMsg("Sukses: Password Cocok!");
    }
  };

  const calculate = () => {
    const pot = price * disc;
    setFinal(price - pot);
  };
  const cekLampu = () => {
    const input = warna.toLowerCase();
    if (input === "merah") {
      setAksi("BERHENTI TOTAL!");
    } else if (input === "kuning") {
      setAksi("hati hati");
    } else if (input === "hijau") {
      setAksi("JALAN!");
    } else {
      setAksi("Lampu rusak / Warna salah");
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
  const cekNilai = () => {
    if (nilai > 85) {
      setGrade("A (kurang)");
    } else if (nilai > 70) {
      setGrade("B (b aja)");
    } else if (nilai > 50) {
      setGrade("C (jagoan)");
    } else {
      setGrade("D (ini baru teknik)");
    }
  };

  const login = () => {
    if (password !== "rahasia") {
      setStatus("BERHASIL LOGIN! (Selamat Datang Admin)");
    } else {
      setStatus("Password Salah!");
    }
  };
  const cek = () => {
    if (angka === 1) {
      setJenis("Ini Angka GANJIL");
    } else {
      setJenis("Ini Angka GENAP");
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
        <h2>51. Intipssword (Bug: Logic)</h2>

        <input type={!show ? "password" : "text"} value={pass} onChange={(e) => setPass(e.target.value)} />

        <button onClick={() => setShow(!show)}>{show ? "Sembunyikan" : "Tampilkan"}</button>

        <p>Status: Mode {show ? "Terbuka" : "Tertutup"}</p>
      </div>
      <div style={{ border: "2px solid purple", padding: "20px", margin: "10px" }}>
        <h2>52. Pembagi Nilai (Bug: Urutan If)</h2>
        <input type="number" placeholder="Masukkan angka 0-100" onChange={(e) => setNilai(Number(e.target.value))} />
        <button onClick={cekNilai}>Cek Grade</button>
        <h1>Grade: {grade}</h1>
        <p>Coba masukkan 95. Kenapa dapat C?</p>
      </div>
      <div style={{ border: "2px solid red", padding: "20px", margin: "10px" }}>
        <h2>54. Login Jebol</h2>
        <input type="text" placeholder="Ketik password sembarang..." onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
        <p>Status: {status}</p>
        <small>Coba ketik "salah123", pasti tetap masuk.</small>
      </div>
      <div style={{ border: "2px solid orange", padding: "20px", margin: "10px" }}>
        <h2>55. Ganjil / Genap (Bug: Terbalik)</h2>
        <input type="number" onChange={(e) => setAngka(Number(e.target.value))} />
        <button onClick={cek}>Cek Angka</button>
        <p>Hasil: {jenis}</p>
        <small>Tips: Masukkan angka 2. Harusnya Genap kan?</small>
      </div>
      <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
        <h2>56. Lampu Merah (Bug: Logika OR)</h2>
        <input placeholder="merah / kuning / hijau" onChange={(e) => setWarna(e.target.value)} />
        <button onClick={cekLampu}>Cek Aksi</button>
        <h1>{aksi}</h1>
        <small>Ketik 'kuning'. Harusnya 'Hati-hati' atau 'Siap-siap', bukan Berhenti.</small>
      </div>
      <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
        <h2>58. Diskon Aneh</h2>
        <p>Harga: {price}</p>
        <p>Diskon: {disc}%</p>
        <button onClick={calculate}>Hitung Diskon</button>
        <p>Harga Akhir: {final}</p>
      </div>
      <div style={{ border: "2px solid orange", padding: "20px", margin: "10px" }}>
        <h2>60. Cek Password (Bug: Logika Terbalik)</h2>
        <input placeholder="Password" onChange={(e) => setP1(e.target.value)} />
        <input placeholder="Ulangi Password" onChange={(e) => setP2(e.target.value)} />
        <button onClick={check}>Validasi</button>
        <p>{msg}</p>
        <small>Coba buat passwordnya beda, dia malah bilang Sukses.</small>
      </div>
      <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
        <h2>61. Luas Persegi (Bug: Missing Return)</h2>
        <input type="number" placeholder="Panjang sisi" onChange={(e) => setSisi(Number(e.target.value))} />
        <button onClick={tombolKlik}>Hitung</button>
        <p>Luas: {luas || "0"}</p>
      </div>
      <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
        <h2>63. Saklar Rusak (Bug: Boolean Logic)</h2>
        <div
          style={{
            width: "50px",
            height: "50px",
            background: isOn ? "yellow" : "gray",
            borderRadius: "50%",
          }}
        ></div>
        <p>Lampu: {isOn ? "NYALA" : "MATI"}</p>
        <button onClick={toggle}>Tekan Saklar</button>
      </div>
      <div style={{ border: "2px solid purple", padding: "20px", margin: "10px" }}>
        <h2>65. Pemenang Undian (Bug: Array Index)</h2>
        <p>Peserta: Ahmad, Budi, Cindy</p>
        <button onClick={acakPemenang}>Cari Pemenang</button>
        <h1>Juara: {pemenang || "Error (Orang tidak ada!)"}</h1>
      </div>

      <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
        <h2>66. Batas Maksimal (Bug: Logic Operator)</h2>
        <p>Maksimal: {max}</p>
        <h1>Angka: {count}</h1>
        <button onClick={tambah}>Tambah</button>
        <p style={{ color: count > max ? "red" : "black" }}>{count > max ? "KELEBIHAN MUATAN!" : "Aman"}</p>
      </div>
    </>
  );
};

export default Debug;
