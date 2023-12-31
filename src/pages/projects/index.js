import ProjectList from '@/components/listprojects';
import { projects } from '@/data';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const Blogs = () => {
  const router = useRouter();
  return (
    <>
      <div id="content">
        <Head>
          <title>Projects | Prakhar Rai</title>
        </Head>
        <img className='leftArrow' onClick={() => router.back()} style={{height: "2rem", width: "2rem"}} src='/leftarrow.png' />
        <h2
          className="dateless"
          style={{ fontSize: "35px" }}
        >
          Projects
        </h2>
        <span style={{ marginBottom: "2rem", height: "0.5px", width: "40%", backgroundColor: "#828282", display: "block" }}></span>

        <ProjectList projects={projects} />
      </div>
    </>
  )
}

export default Blogs;