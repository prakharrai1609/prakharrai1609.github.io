import React from "react";
import { blogs } from "@/data";

const ListBlogs = () => {
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blogObj, index) => (
          <div className="col-md-6 col-12" key={index}>
            <h2>{blogObj.heading}</h2>
            {blogObj.blogList.map((blog) => (
              <a href={"blogs/" + blog.slug} key={blog.title}>
                {blog.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlogs;
