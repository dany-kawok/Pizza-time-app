import backgroundImage from "../../../public/assets/images/footerImages/footer.webp";
function Footer() {
  return (
    <div className="w-full h-[86dvh] bg-[rgb(34,34,34)] flex items-center">
      <div
        className="footer-image w-0 md:w-[40%] h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-center h-[70%] gap-10 ">
        <div className="footer-slogan w-[25%]  text-2xl text-[#dedede]">
          <strong>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </strong>
        </div>
        <div className="footer-locations  ">
          <h2 className="text-[rgb(183,144,60)] font-bold text-lg ">
            FIND OUR RESTAURANTS
          </h2>

          <ul>
            <li>
              <h2>1654 R. Don Road #304.</h2>
            </li>
            <li>
              <h2>NewYork, 85022 </h2>
            </li>
            <li>
              <h2>(602) 867-1010</h2>
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              <h2>2356 K. Laquie Rd #235.</h2>
            </li>
            <li>
              <h2>NewYork, 85022 </h2>
            </li>
            <li>
              <h2>(602) 867-1010</h2>
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              <h2>1614 E. Erwin St #104.</h2>
            </li>
            <li>
              <h2>NewYork, 85022 </h2>
            </li>
            <li>
              <h2>(602) 867-1010</h2>
            </li>
            <li></li>
          </ul>
          <ul>
            <li>
              <h2>1614 W. Caroll St #125.</h2>
            </li>
            <li>
              <h2>NewYork, 85022 </h2>
            </li>
            <li>
              <h2>(602) 867-1010</h2>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="footer-working-hours ">
          <h2 className="text-[rgb(183,144,60)] font-bold text-xl ">
            WORKING HOURS
          </h2>

          <ul>
            <li>
              <h2>MONDAY UNTIL FRIDAY</h2>
            </li>
            <li>
              <h2>9:00 – 22:00</h2>
            </li>
          </ul>
          <ul>
            <li>
              <h2>SATURDAY - SUNDAY</h2>
            </li>
            <li>
              <h2>12:00 – 24:00</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
