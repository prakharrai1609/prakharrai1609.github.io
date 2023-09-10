import React from "react";

const SocialsButtons = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "row" }}
      className="social-links"
    >
      <span className="footerSocials">
        <button
          style={{
            border: "1px solid #0077b5",
            borderRadius: "25px",
            padding: "4px 10px 4px",
          }}
          className="btn btn-primary"
        >
          <a
            href="https://www.linkedin.com/in/prakharrai1609"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            LinkedIn
          </a>
        </button>
      </span>
      <span className="footerSocials">
        <button
          style={{
            border: "1px solid black",
            borderRadius: "25px",
            padding: "4px 10px 4px",
          }}
          className="btn btn-dark"
        >
          <a
            href="https://twitter.com/prakharrai1609/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Twitter
          </a>
        </button>
      </span>
      <span className="footerSocials">
        <button
          style={{
            border: "1px solid #f5f5f5",
            borderRadius: "25px",
            padding: "4px 10px 4px",
            backgroundColor: "#f5f5f5",
          }}
          className="btn"
        >
          <a
            href="https://github.com/prakharrai1609/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Github
          </a>
        </button>
      </span>
    </div>
  );
};

export default SocialsButtons;
