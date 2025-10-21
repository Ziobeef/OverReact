import React from "react";
import RotatingText from "./animation/textrotating/textrotating";
import { BackgroundGradient } from "./animation/bggradient/bggradient";
import ASCIIText from "./animation/asciianim/asciianim";

function Profile() {
  return (
    <>
      <div style={{ backgroundColor: "#101f26" }}>
        <div>
          <div>
            <img className="blur" src="/profil.jpg" />
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
        <div style={{ height: "250px", backgroundColor: "#15161b" }}>
          <div className="row my-5 ">
            <div className="col-3 text-center my-5">
              <div className="text-start mx-5">
                <h3 className="text-light">Company</h3>
                <h5 className="border-bottom w-50"></h5>
                <h5 className="text-secondary">About Us</h5>
                <h5 className="text-secondary">Our Services</h5>
                <h5 className="text-secondary">Privac Polic</h5>
                <h5 className="text-secondary">Affiliate Program</h5>
              </div>
            </div>
            <div className="col-3 text-center my-5">
              <div className="text-start mx-5">
                <h3 className="text-light">Get Help</h3>
                <h5 className="border-bottom w-50"></h5>
                <h5 className="text-secondary">FAQ</h5>
                <h5 className="text-secondary">Returns</h5>
                <h5 className="text-secondary">Shipping</h5>
                <h5 className="text-secondary">Order Status</h5>
              </div>
            </div>
            <div className="col-3 text-center my-5">
              <div className="text-start mx-5">
                <h3 className="text-light">Online Shop</h3>
                <h5 className="border-bottom w-75"></h5>
                <h5 className="text-secondary">Watch</h5>
                <h5 className="text-secondary">Shoes</h5>
                <h5 className="text-secondary">Dress</h5>
                <h5 className="text-secondary">Bag</h5>
              </div>
            </div>
            <div className="col-3 text-center my-5">
              <div className="text-start ">
                <h3 className="text-light">Follow Us</h3>
                <div className="border-bottom w-75"></div>
                <div className="row">
                  <div className="col-4">
                    <img src="/yutub.png" className="w-25 rounded rounded-3  m-auto my-3" />
                  </div>
                  <div className="col-4">
                    <img src="/ig.png" className="w-25 rounded rounded-3  m-auto my-3" />
                  </div>
                  <div className="col-4">
                    <img src="/x.png" className="w-25 rounded rounded-3  m-auto my-3" />
                  </div>
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
