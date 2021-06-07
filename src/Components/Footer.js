import React from "react";
import "./Footer.css"
  
const Footer = () => {
  return (
    <footer style={{marginTop:"115px",textAlign:"center",backgroundImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTlllQG8VVTgKbp85-pgBRIBKAouI7EFWJg&usqp=CAU"}}>
<div class="column">
<a class="footer_title">M E A N I N G OF CODE</a>
<a>Company envisioned to provide free of cost education to everyone who is interested in learning what are COMPUTERS</a>

</div>
<div class="column">
<a class="footer_title">OTHER LINKS</a>
<a href="#">Privacy Policy</a>
<a href="#">Terms & Conditions</a>
<a href="#">Ticket</a>
<a href="#">Contact Us</a>
</div>
<div class="column">
<a class="footer_title">SHORT CUT</a>
<a href="">Our Services</a>
<a href="">Our Blog</a>
<a href="">Our Projects</a>
<a href="">About Us</a>
</div>

<div class="column">
<a class="footer_title">GET IN TOUCH</a>
<a title="Address"><i class="fa fa-map-marker"></i> Maya Garden City - Chandigarh - 140603</a>
<a href="emailto:" title="Email"><i class="fa fa-envelope"></i> aditya0183.cse19@chitkara.edu.in</a>
<a href="tel:" title="Contact"><i class="fa fa-phone"></i> +(91)890-145-9471</a>
</div>


</footer>
  );
};
export default Footer;