import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 2px" }}
      id="footer"
    >
      <div
        style={{ display: "flex", alignItems: "center" }}
        className="credits"
      >
        &#9400; Prakhar Rai, 2023
      </div>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        class="social-links"
      >
        <span className="footerSocials">
          <a href="https://www.linkedin.com/in/prakharrai1609" target="_blank">
            <image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-line-icon.png"
              alt="LinkedIn"
            />
          </a>
        </span>
        <span className="footerSocials">
          <a href="https://github.com/prakharrai1609/" target="_blank">
            <image
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              alt="GitHub"
            />
          </a>
        </span>
        <span className="footerSocials">
          <a href="https://twitter.com/prakharrai1609/" target="_blank">
            <image
              src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
              alt="GitHub"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
