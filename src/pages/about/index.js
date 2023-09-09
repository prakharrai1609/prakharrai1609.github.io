import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowUpWideShort, faMale } from "@fortawesome/free-solid-svg-icons";
import Experience from "@/components/experience";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <div id="content">
      <Head>
        <title>About | Prakhar Rai</title>
      </Head>
      <a href="/">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </a>
      <div className="about-image">
        <Image layout="fill" src="/prakhar.png" alt="bhai ke image" />
      </div>
      <h1
        className="dateless"
        style={{ fontSize: "35px" }}
      >
        About me
      </h1>
      <span style={{ marginBottom: "2rem", height: "0.5px", width: "40%", backgroundColor: "#828282", display: "block" }}></span>

      <p>
        While studying engineering, I developed a strong inclination towards Data Structures & Algorithms, I also got an
        opportunity to teach over <strong>800+</strong> students who were
        preparing for placements.
      </p>
      <p>
        Nowadays I've been diving deep into <strong>system design</strong>{" "}
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
        style={{ fontSize: "35px" }}
      >
        Career Highlights
      </h2>

      <span style={{ marginBottom: "2rem", height: "0.5px", width: "40%", backgroundColor: "#828282", display: "block" }}></span>

      <Experience />
      <p className="ending"><em><a style={{ textDecoration: "none" }} href="/">~ end.</a></em></p>
      <span onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="backtotop"><FontAwesomeIcon color="grey" size="xl" icon={faArrowUpWideShort} /></span>
    </div>
  );
};

export default About;
