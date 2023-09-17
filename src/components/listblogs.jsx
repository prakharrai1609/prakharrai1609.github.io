import React from "react";
import { blogs } from "@/data";
import Image from "next/image";

const ListBlogs = () => {
  return (
    <div className="container">
      <div className="row">
        {blogs.map((blogObj, index) => (
          <div className="col-md-6 col-12" key={index}>
            <h2 style={{ fontFamily: "inter" }}>{blogObj.heading}</h2>
            {blogObj.blogList.map((blog) => (
              <>
                {blog.outside ? (
                  <a
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      textDecoration: "none",
                    }}
                    href={blog.outside}
                    target="_blank"
                    key={blog.title}
                  >
                    <img
                      style={{ margin: "0 1rem 0 0", width: "2rem" }}
                      src="/linkedin.png"
                      alt="linkedin"
                    />{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        fontSize: "1rem",
                      }}
                    >
                      {blog.title}
                    </span>
                  </a>
                ) : (
                  <a
                    style={{ textDecoration: "none" }}
                    href={"blogs/" + blog.slug}
                    key={blog.title}
                  >
                    ✏️{" "}
                    <span
                      style={{
                        color: "blue",
                        fontSize: "1rem",
                        textDecoration: "underline",
                      }}
                    >
                      {blog.title}
                    </span>
                  </a>
                )}
                <span>{blog.description}</span>
                <br></br>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlogs;
