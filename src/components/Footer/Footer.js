import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
  <footer>
  
    <div className="row" id="first">
      <div className="col-md-4 col-sm-12 mb-4 ">
        <h3>Disclaimer:</h3>
        <p className='mt-3' >
          We are not responsible for any discrepancies about any data presented here. Aspirants are requested to always cross-check with official resources.
        </p>
      </div>
      <div className="col-md-4 col-sm-12 mb-4  L2" >
        <h3>Legal</h3>
        
        <Link to="/disclaimer"><h4 className='mt-3'>Disclaimer</h4></Link>
        <h4 className='mt-3'>Disclaimer</h4>
      </div>
      <div className="col-md-4   col-sm-12 L3 ">
        <h3 >Follow Us</h3>
        <div className="links mt-3 ">
          <i className="fab fa-whatsapp mr-5 fa-2x"></i>
          <i className="fab fa-github fa-2x"></i>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12 text-center">
        <p>
          © 2024 All Rights Reserved by examtards.in
        </p>
        <p>
          Made with ❤ for Aspirants
        </p>
      </div>
    </div>

</footer>   




    </>
  )
}

export default Footer;