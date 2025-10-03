import React from "react";

function Profile() {
  return (
    <div>
      <div>
        <img src="/profile.jpg" />
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-6 border text-center ">
            <h1>Hello Im Zio  </h1>
            Maecenas rutrum condimentum lorem non ullamcorper. Nunc nec elementum est. Nunc gravida dui in tellus consequat eleifend. Proin imperdiet, est quis accumsan mollis, dui arcu tempus tellus, sed varius risus leo in eros. Aliquam
            ut odio sit amet neque pharetra suscipit. Suspendisse egestas quam nisi, quis porta quam tempus eu. Morbi nibh risus, pulvinar malesuada quam vel, porttitor tempor diam. Fusce facilisis dolor eget lorem commodo, ac sagittis
            lacus fermentum. Nunc condimentum metus quis imperdiet sollicitudin. Nunc elit diam, tempor vitae accumsan non, iaculis faucibus lacus.
          </div>
          <div className="col-6 border ">
            <img style={{ width: "60%" }} src="omjoko.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
