import React, { useState } from "react";
import RotatingText from "./animation/textrotating/textrotating";
import { BackgroundGradient } from "./animation/bggradient/bggradient";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <div style={{ backgroundColor: "#101f26" }}>
        <div>
          <div>
            <img className="blur w-010" src="/profil.jpg" />
          </div>
          <div className="container my-5 position-absolute start-0 end-0  " style={{ top: "30%" }}>
            <div className="text-center border rounded-5 p-4  text-white mx-5" style={{ opacity: 0.6, backgroundColor: "#0b3835" }}>
              <div className="fw-bold">
                <h1>
                  Hello Im Zio
                  <RotatingText
                    style={{ width: "fit-content" }}
                    texts={["Fullstack Developer", "Mobile Developer", "AI-Centric", "Ganteng", "Anjay"]}
                    mainClassName="bg-danger px-5 rounded-3 d-inline-block mx-3"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    loop={true}
                    autoPlay={true}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%" }}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2800}
                  />
                </h1>
                Hi! I’m a 14-year-old programmer who loves turning ideas into reality through code. I enjoy learning new technologies, creating websites, and developing small projects that challenge my creativity and logic. Even though I’m
                still young, I’m passionate about improving my skills and growing into a developer who builds meaningful and innovative digital solutions.
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="my-5 container border-dark rounded-5 p-5  w-100  ">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
            <div className="row">
              <div className="col-6 text-start align-self-center px-5">
                <h1>About Me</h1>
                <div>
                  I am a 14-year-old student who is passionate about programming and technology. I started learning to code at a young age and quickly became interested in how software works behind the scenes. I have experience with several
                  programming languages such as Python, JavaScript, and C++, and I enjoy creating simple games, websites, and small projects to improve my skills. I love solving problems through logic and creativity, and I’m always eager to
                  learn new things about coding and software development. My goal is to become a professional programmer who can build useful and innovative applications in the future.
                </div>
              </div>
              <div className="col-6  text-center">
                <div className="h-100 position-relative w-100  d-flex justify-content-center ">
                  <img src="/omjoko.jpeg" className="w-75 rounded rounded-5" />
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
        <div className="row container mx-auto my-5 ">
          <div className="text-center col-3 ">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900  ">
                <img src="/javascript.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Java Script</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-3 ">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/laraveel.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Laravel</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-3 ">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/okk.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>Tailwind</h5>
              </BackgroundGradient>
            </div>
          </div>
          <div className="text-center col-3 ">
            <div className="mx-5">
              <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 container ">
                <img src="/atom.png" className="w-75 rounded rounded-3  m-auto my-3" />
                <h5>React.js</h5>
              </BackgroundGradient>
            </div>
          </div>
        </div>
        <div className="container text-center my-5">
          <div className="d-flex justify-content-center">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link" + (activeTab === "home" ? " active" : "")}
                  onClick={() => setActiveTab("home")}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link" + (activeTab === "profile" ? " active" : "")}
                  onClick={() => setActiveTab("profile")}
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={"nav-link" + (activeTab === "contact" ? " active" : "")}
                  onClick={() => setActiveTab("contact")}
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content text-light" id="pills-tabContent">
            <div className={"tab-pane fade" + (activeTab === "home" ? " show active" : "")} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              Arduino
            </div>
            <div className={"tab-pane fade" + (activeTab === "profile" ? " show active" : "")} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              IOT
            </div>
            <div className={"tab-pane fade" + (activeTab === "contact" ? " show active" : "")} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
              BALLSLLASLASDLKASDLAKSDLASKD
            </div>
          </div>
        </div>
        <div className="text-light" style={{ backgroundColor: "#15161b" }}>
          <div className="row container border m-auto">
            <div className="col-6">
              <div className="w-50 m-auto ">
                <h2>Get In Touch</h2>
                <div>Got a question?</div>
                <div> Want to discuss an idea? Let's start the conversation."</div>
                <div className="row w-50">
                  <div className="col-3 border">a</div>
                  <div className="col-3 border">a</div>
                  <div className="col-3 border">a</div>
                  <div className="col-3 border">a</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-5 w-50 ">
                <div className=" border bg-danger">
                  <div className="border">WhatsApp</div>
                </div>
                <div className=" ">
                  <div className="border">Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
