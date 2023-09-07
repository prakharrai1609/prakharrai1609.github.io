import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowUpWideShort, faMale } from "@fortawesome/free-solid-svg-icons";
import Experience from "@/components/experience";
import Image from "next/image";

const About = () => {
  return (
    <div id="content">
      <a href="/">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </a>
      <div className="about-image">
        <Image layout="fill" src="/prakhar.png" alt="bhai ke image" />
      </div>
      <h1
        className="dateless"
        style={{ fontSize: "2rem", textDecoration: "underline" }}
      >
        About me
      </h1>

      <div className="timeline">
        <div className="timeline-line"></div>
      </div>


      <p>
        While studying engineering, I came across the subject of data
        structures & algorithms and started exploring it, I also got an
        opportunity to teach over <strong>800+</strong> students who were
        preparing for placements.
      </p>
      <p>
        Recently I've been involved in studying <strong>system design</strong>{" "}
        of various highly scalable products & trying to understand the thought
        process which went on behind the scenes.
      </p>
      <p>
        I've also been studying about <strong>database internals</strong> and{" "}
        <span style={{ color: "red", fontWeight: 700 }}>tinkering</span> with
        open source DBs like redis, juno etc and trying to build my own.
      </p>

      <h2
        className="dateless"
        style={{ fontSize: "2rem", textDecoration: "underline" }}
      >
        Contributions / Experience
      </h2>
      <Experience />
      <p className="ending"><em><a style={{ textDecoration: "none" }} href="/">~ end.</a></em></p>
      <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="backtotop"><FontAwesomeIcon color="grey" size="xl" icon={faArrowUpWideShort} /></span>
    </div>
  );
};

export default About;
