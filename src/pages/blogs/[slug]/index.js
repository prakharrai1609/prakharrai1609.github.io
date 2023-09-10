import { blogList } from '@/data';
import handler from '@/pages/api/hello';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Blog = () => {

  return (
    <div id="content">
      <span dangerouslySetInnerHTML={{ __html: blogList[0] }}></span>
    </div>
  )
}

export default Blog;