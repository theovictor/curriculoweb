import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "assets/css/DashPage.css";
import "assets/css/Dashnavbar.css";
import DashNavbar from "components/Navbars/DashNavbar.js";
import DashBody from "components/Dashboard/DashBody.js";
import isLoged from "helper/IsLoged";
// import DashFooter from "components/Footers/DashFooter.js";



export default function Dashboard(){
  
  const history = useHistory();
 
  const routeChange = () =>{ 
     
    history.push('/');
  }
 
  useEffect(() => {
    document.body.classList.add("dashboard");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    return function cleanup() {
      document.body.classList.remove("dashboard");
    };
    
  });

  if(!isLoged()){routeChange()};

  

  
  return (
    <>
      <div className="wrapper">
        <DashNavbar />
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1"
            style={{
              backgroundImage: 'url("' + require("assets/img/theme/curved.jpg") + '")',
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <DashBody />
        </section>
        {/* <DashFooter /> */}
      </div>
    </>
  );
}