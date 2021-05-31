import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";

import isLoged from "helpers/isLoged";
import DashNavbar from 'components/Navbars/DashNavbar'
import ContatoCard from 'components/Contato/ContatoCard'

export default function Contato(){
  const history = useHistory();
  const routeChange = () =>{ 
    history.push('/');
  }
  useEffect(() => {
    document.body.classList.add('contact');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup(){
      document.body.classList.remove('contact');
    };
  }, []);
  if(!isLoged()){routeChange()};
  
  return(
    <>
      <DashNavbar />
      <div className="wrapper">
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
          <ContatoCard />
        </section>
      </div>
    </>
  )
}