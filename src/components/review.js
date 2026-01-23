import axios from "axios";
import React, { use, useEffect, useState } from "react";

const Review = () => {
  const [joke, setJoke] = useState({});
  const [gendername, setGendername] = useState("");
  const [responseGender, setResponseGender] = useState({});
  const [agename, setAgename] = useState("");
  const [responseAge, setResponseAge] = useState({});
  const [nationalityname, setNationalityname] = useState("");
  const [responseNationality, setResponseNationality] = useState({});
  const [universitiesname, setUniversitiesname] = useState("");
  const [responseUniversities, setResponseUniversities] = useState([]);
  const [dogImageUrl, setDogImageUrl] = useState("https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg");
  const [user, setUser] = useState(null);
  const [adviceData, setAdviceData] = useState(null);
  const [count, setCount] = useState(0);

  const getGender = async (e) => {
    const response = await axios.get("https://api.genderize.io/?name=" + gendername);
    setResponseGender(response.data);
    console.log(response);
  };
  const getAge = async (e) => {
    const response = await axios.get("https://api.agify.io/?name=" + agename);
    setResponseAge(response.data);
    console.log(response);
  };
  const getNationality = async (e) => {
    const response = await axios.get("https://api.nationalize.io/?name=" + nationalityname);
    setResponseNationality(response.data);
    console.log(responseNationality);
  };
  const getJokes = async (e) => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    setJoke(response.data);
    console.log(response);
  };
  const getUniversities = async (e) => {
    const response = await axios.get("http://universities.hipolabs.com/search?name=" + universitiesname);
    console.log(response);
    setResponseUniversities(response.data);
  };
  const fetchDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    // PERBAIKAN: Seharusnya menggunakan useState untuk mengubah dogImageUrl

    console.log("Variabel dogImageUrl berubah menjadi:", dogImageUrl);
    setDogImageUrl(data.message);
  };
  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const result = await res.json();
    setAdviceData(result.slip);
  };
  const tambah = () => {
    setCount((count = count + 1));
  };

  useEffect(() => {
    getJokes();
    fetchDog();
    getAdvice();

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  if (!user) return <p>Loading...</p>;
  return (
    <div className="container border border-5">
      <div className="row">
        <div className="border border-3 border-danger col-12">
          <img src="https://www.shutterstock.com/image-vector/application-programming-interface-api-different-600nw-2670637915.jpg" className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className="col-8 border border-3 border-primary">
          <h3>Joke of the day</h3>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
          <button className="btn btn-primary" onClick={getJokes}>
            Get New Joke
          </button>
        </div>
        <div className="col-4 border border-3 border-success">
          <label>Name</label>
          <input type="text" value={gendername} onChange={(e) => setGendername(e.target.value)} />
          <button className="btn btn-primary" onClick={getGender}>
            Get Gender
          </button>
          {responseGender && (
            <div>
              <p>Gender: {responseGender.gender}</p>
              <p>Probability: {responseGender.probability}</p>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-4 border border-3 border-primary">
            <label>Name</label>
            <input type="text" value={agename} onChange={(e) => setAgename(e.target.value)} />
            <button className="btn btn-primary" onClick={getAge}>
              Get Age
            </button>
            {responseAge && (
              <div>
                <p>Age: {responseAge.age}</p>
              </div>
            )}
          </div>
          <div className="col-4 border border-3 border-info">Layer 3</div>
          <div className="col-4 border border-3 border-secondary">Layer 3</div>
        </div>
        <div className="row">
          <div className="col-4 border border-3 border-primary">
            <label>Name</label>
            <input type="text" value={nationalityname} onChange={(e) => setNationalityname(e.target.value)} />
            <button className="btn btn-primary" onClick={getNationality}>
              Get Nationality
            </button>
            {responseNationality && (
              <div>
                {responseNationality?.country?.map((data, index) => (
                  <p key={index}>
                    <img src={`https://flagsapi.com/${data.country_id}/shiny/64.png`} />
                    Country: {data.country_id}, Probability: {data.probability} - {index}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="col-8 border border-3 border-success">
            <label>Universities</label>
            <input type="text" value={universitiesname} onChange={(e) => setUniversitiesname(e.target.value)} />
            <button className="btn btn-primary" onClick={getUniversities}>
              Get Universities
            </button>
            {responseUniversities && (
              <div>
                {responseUniversities.map((university, index) => (
                  <p key={index}>
                    University:{university.name}
                    <br />
                    Web Page:
                    {university?.web_pages ? (
                      <a href={university.web_pages[0]} target="_blank">
                        Visit Website
                      </a>
                    ) : (
                      "gada web nya jir"
                    )}
                    <br />
                    Country: <img src={`https://flagsapi.com/${university.alpha_two_code}/shiny/64.png`} />
                  </p>
                ))}
              </div>
            )}
          </div>
          <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
            <h2>1. Dog Gallery (Bug: Variabel vs State)</h2>
            <img src={dogImageUrl} alt="Dog" style={{ width: "200px", height: "200px" }} />
            <br />
            <button onClick={fetchDog}>Ganti Foto Anjing</button>
            <p>Tips: Perhatikan mengapa gambar tidak berubah meski console.log menunjukkan URL baru.</p>
          </div>
          <div style={{ border: "1px solid blue", padding: "20px", margin: "10px" }}>
            <h2>2. User Profile (Bug: Typo Variabel)</h2>
            <p>Nama: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
          <div style={{ border: "1px solid green", padding: "20px", margin: "10px" }}>
            <h2>3. Advice Generator</h2>
            <p>Nasihat Hari Ini: {adviceData?.advice}</p>
            <button onClick={getAdvice}>Cari Nasihat</button>
          </div>
          <div style={{ border: "1px solid red", padding: "20px", margin: "10px" }}>
            <h2>8. Counter (Bug: Assignment Error)</h2>
            <p>Angka: {count}</p>
            <button onClick={tambah}>Tambah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
