import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Head from 'next/head';

const Contact = () => {
  return <div id="content">
    <Head>
      <title>Contact | Prakhar Rai</title>
    </Head>
    {/* <header>
      <p className="name-header"><a href="/">← Prakhar Rai</a></p>
    </header> */}
    <a href="/">
      <FontAwesomeIcon icon={faArrowLeftLong} />
    </a>
    <div id="twoColumns">
      <div>
        <h2
          className="dateless"
          style={{ fontSize: "35px" }}
        >
          Contact
        </h2>
        <span style={{ marginBottom: "2rem", height: "0.5px", width: "100%", backgroundColor: "#828282", display: "block" }}></span>

        <p>I'm happy to hear from you:</p>

        <ul>
          <li><a href="mailto:rai.prakhar1609@gmail.com">rai.prakhar1609@gmail.com</a></li>
          <li><a href="https://twitter.com/prakharrai1609">@twitter</a></li>
          <li><a href="https://linkedin.com/in/prakharrai1609">@linkedin</a></li>
        </ul>

        <p>I reply to every thoughtful note!</p>
      </div>
      <div>
        <Image src="/mail.gif" layout='intrinsic' width={300} height={300} />
      </div>
    </div>
  </div>
}

export default Contact