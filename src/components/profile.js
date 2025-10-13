import React from "react";
import RotatingText from "./animation/textrotating/textrotating";
import { BackgroundGradient } from "./animation/bggradient/bggradient";


function Profile() {
  return (
    <>
      <div>
        <div>
          <img className="blur" src="/profile.jpg" />
        </div>
        <div className="container my-5 position-absolute start-0 end-0" style={{ top: "30%" }}>
          <div className="text-center border rounded-5 p-4  text-white mx-5" style={{ opacity: 0.6, backgroundColor: "#0b3835" }}>
            <div className="fw-bold">
              <h1 >
                Hello Im Zio
                <RotatingText style={{width:"fit-content"}}
                  texts={["Fullstack Developer", "Mobile Developer", "AI-Centric", "Ganteng","anjay"]}
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
             Hi! I’m a 14-year-old programmer who loves turning ideas into reality through code. I enjoy learning new technologies, creating websites, and developing small projects that challenge my creativity and logic. Even though I’m still young, I’m passionate about improving my skills and growing into a developer who builds meaningful and innovative digital solutions.
             
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="border border-5 my-5 container border-dark rounded-5 p-5">
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
              <img src="/omjoko.jpg" className="w-75 rounded rounded-5" />
              
            </div>
          </div>
        </div>
      </div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <img
        src="/product.webp"
        alt="premium product"
        className="object-contain rounded-lg"
      />
      <h3 className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Premium Product Name
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Beautiful description that sells the value, not just features.
      </p>
    </BackgroundGradient>
    </>
  );
}

export default Profile;
