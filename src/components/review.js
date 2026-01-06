import axios from "axios";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [joke, setJoke] = useState({});
  const getJokes = async (e) => {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    setJoke(response.data);
    console.log(response);
  };
  useEffect(() => {
    getJokes();
  }, []);
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
            <button className="btn btn-primary" onClick={getJokes}>Get New Joke</button>
        </div>
        <div className="col-4 border border-3 border-success">Layer 2</div>
      </div>
      <div className="row">
        <div className="col-4 border border-3 border-primary">Layer 3</div>
        <div className="col-4 border border-3 border-info">Layer 3</div>
        <div className="col-4 border border-3 border-secondary">Layer 3</div>
      </div>
      <div className="row">
        <div className="col-4 border border-3 border-primary">Layer 4</div>
        <div className="col-8 border border-3 border-success">Layer 4</div>
      </div>
    </div>
  );
};

export default Review;
