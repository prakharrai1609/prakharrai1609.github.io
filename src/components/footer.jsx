import React from "react";
import SocialsButtons from "./socialsButtons";

const Footer = () => {
  return (
    <footer id="footer">
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="credits"
      >
        &#9400; Prakhar Rai, 2023
      </div>
      <SocialsButtons />
    </footer>
  );
};

export default Footer;
