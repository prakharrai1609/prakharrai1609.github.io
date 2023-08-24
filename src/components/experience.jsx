import React from "react";
import { experience } from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <ul>
      {experience.map((e) => {
        return (
          <>
            <li>
              <span className="index-date">{e.date}</span>
              <span>|&nbsp;</span>
              <a href="">{e.companyName}</a>
            </li>
            <ul>
              {
                e.list.map(li => {
                  return <li className="sub-list">
                  <FontAwesomeIcon size="sm" icon={faMapPin} />
                  <span dangerouslySetInnerHTML={{__html: li}}></span>
                </li>
                })
              }
          </ul>
          </>
        );
      })}
    </ul>
  );
};

export default Experience;
