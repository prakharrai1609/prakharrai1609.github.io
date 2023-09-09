import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import React from 'react'

const Blogs = () => {
  return (
    <div id="content">
      <Head>
        <title>Projects | Prakhar Rai</title>
      </Head>
      <a href="/">
        <FontAwesomeIcon icon={faArrowLeftLong} />
      </a>
      <h2
        className="dateless"
        style={{ fontSize: "35px" }}
      >
        Projects
      </h2>
      <span style={{ marginBottom: "2rem", height: "0.5px", width: "40%", backgroundColor: "#828282", display: "block" }}></span>

    </div>
  )
}

export default Blogs;