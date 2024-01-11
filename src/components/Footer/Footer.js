import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import {  XIcon, WhatsappIcon,WhatsappShareButton,FacebookIcon,LinkedinIcon,TelegramIcon,LinkedinShareButton, TelegramShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
const ShareURL="https://examtards-frontend.vercel.app/";
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
        <Link to="/contact-us"><h4 className='mt-3'>Contribute </h4></Link>
      </div>
      <div className="col-md-4   col-sm-12 L3 ">
        <h3 >Share now</h3>
        <div className="links mt-3 ">
          
          <WhatsappShareButton  url={ShareURL}   title="Begin your exam journey with exam tards" >
          <WhatsappIcon size={32} round className='mx-2' />
          </WhatsappShareButton>
          

          <TwitterShareButton url={ShareURL}  className='mx-2' >
          <XIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton  url={ShareURL} hashtag='examtards'><FacebookIcon size={32} round  className='mx-2'/></FacebookShareButton>
          <LinkedinShareButton  url={ShareURL} title="exam tards" summary="Hey we are examtards, making the world's biggest one stop for any aspirants to start their exam journey."><LinkedinIcon size={32} round  className='mx-2'/></LinkedinShareButton>
          <TelegramShareButton  url={ShareURL} title='examtards'><TelegramIcon size={32} round  className='mx-2'/> </TelegramShareButton>

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