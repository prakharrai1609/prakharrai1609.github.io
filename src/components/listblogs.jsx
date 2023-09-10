import React from "react";
import { blogs } from "@/data";
import { Utils } from "@/common/utils";

const ListBlogs = () => {
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blogObj) => (
          <div className="col-md-6 col-12">
            <h2>{blogObj.heading}</h2>
            {blogObj.blogList.map((blog) => (
              <a href={"blogs/" + Utils.getSlug(blog.title)} key={blog.title}>
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
