import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import 'assets/css/profile-page.css'
import 'assets/css/navbar.css'

import DashNavbar from "components/Navbars/DashNavbar.js";
import ProfileBody from "components/Profile/ProfileBody.js";
import isLoged from 'helpers/isLoged';

export default function Profile() {
  const history = useHistory();
  const routeChange = () => {
    history.push('/');
  }
  if (!isLoged()) { routeChange() };

  useEffect(() => {
    document.body.classList.add("profile");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile");
    };
  },[]);
  return (
    <>
      <DashNavbar />
      <main className="profile-page">
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