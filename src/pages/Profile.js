import React from "react";
import ProfileBody from "components/Profile/ProfileBody.js";
import DashNavbar from "components/Navbars/DashNavbar.js";
import "assets/css/ProfilePage.css";

function Profile() {
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup(){
            document.body.classList.remove("profile-page");
        };
    });
    return(
        <>
        <main className="profile-page">
            <DashNavbar />
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="section">
            <ProfileBody />
          </section>
        </main>
        </>
    );
}
export default Profile;
