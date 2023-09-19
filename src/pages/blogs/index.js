import ListBlogs from '@/components/listblogs';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

const Blogs = () => {
  const router = useRouter();
  return (
    <>
      <div id="content">
        <Head>
          <title>Blogs | Prakhar Rai</title>
        </Head>
        <img className='leftArrow' onClick={() => router.back()} style={{height: "2rem", width: "2rem"}} src='/leftarrow.png' />
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
      <div style={{margin:"0 10%"}}>
        <ListBlogs />
      </div>
    </>
  )
}

export default Blogs;