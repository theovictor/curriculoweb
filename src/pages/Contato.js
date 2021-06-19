import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom";

import isLoged from "helpers/isLoged";
import Navbar1 from '../layouts/components/Navbar1'
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
      <Navbar1 />
      <div className="wrapper">
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-gray">
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