import ListBlogs from '@/components/listblogs';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

const Blogs = () => {
  return (
    <>
      <div id="content">
        <Head>
          <title>Blogs | Prakhar Rai</title>
        </Head>
        <a href="/">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </a>
        <div className="about-image">
          <Image layout="fill" src="/blogs.png" alt="bhai ke image" />
        </div>
        <h2
          className="dateless"
          style={{ fontSize: "35px" }}
        >
          Blogs
        </h2>
        <span style={{ marginBottom: "2rem", height: "0.5px", width: "40%", backgroundColor: "#828282", display: "block" }}></span>
      </div>
      <ListBlogs />
    </>
  )
}

export default Blogs;