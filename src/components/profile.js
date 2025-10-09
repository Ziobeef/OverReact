import React from "react";

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
            <h1>Hello Im Zio </h1>
            Maecenas rutrum condimentum lorem non ullamcorper. Nunc nec elementum est. Nunc gravida dui in tellus consequat eleifend. Proin imperdiet, est quis accumsan mollis, dui arcu tempus tellus, sed varius risus leo in eros. Aliquam
            ut odio sit amet neque pharetra suscipit. Suspendisse egestas quam nisi, quis porta quam tempus eu. Morbi nibh risus, pulvinar malesuada quam vel, porttitor tempor diam. Fusce facilisis dolor eget lorem commodo, ac sagittis
            lacus fermentum. Nunc condimentum metus quis imperdiet sollicitudin. Nunc elit diam, tempor vitae accumsan non, iaculis faucibus lacus.
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div className="border border-5 my-5 container border-primary">
      <div className="row">
      <div className="col-6 border border-danger border-5 text-start">
        <div>About Me</div>
        <div>Aku suka makan ikan tambah yogurt</div>
        <div>Aku suka makan ikan tambah yogurt</div>
        <div>Aku suka makan ikan tambah yogurt</div>
      </div>
      <div className="col-6 border border-success border-5 text-center">
        <div className="h-100 position-relative w-100 border border-warning border-5 d-flex justify-content-center ">
        <img src="/omjoko.jpg" className="w-75"/>
        <div className="position-absolute  left-5 border border-5" style={{marginTop:"550px"}}>my papi</div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
