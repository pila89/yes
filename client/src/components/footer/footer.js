import React from "react";
import "./Footer.css"


const FooterPage = () => {
  return (
    <div color="blue"  >
      
        <div  className = "footer" >
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.CARWORLD.com"> www.CARWORLD.com </a>
        </div>
     
    </div>
  );
}

export default FooterPage;