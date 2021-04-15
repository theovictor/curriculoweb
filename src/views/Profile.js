import React from "react";
import ProfileBody from "components/Profile/ProfileBody.js";
import DashNavbar from "components/Navbars/DashNavbar.js";
import "assets/css/ProfilePage.css";

class Profile extends React.Component {
  componentDidMount() {
    document.body.classList.add("profile-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main className="profile-page" ref="main">
            <DashNavbar />
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
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
}

export default Profile;
