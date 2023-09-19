import ProjectList from '@/components/listprojects';
import { projects } from '@/data';
import Head from 'next/head';
import React from 'react'

const Blogs = () => {
  return (
    <>
      <div id="content">
        <Head>
          <title>Projects | Prakhar Rai</title>
        </Head>
        <a href="/">
          <img style={{height: "2rem", width: "2rem"}} src='/leftarrow.png' />
        </a>
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