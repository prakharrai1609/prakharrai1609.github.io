import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUser, faBookJournalWhills } from '@fortawesome/free-solid-svg-icons'

const texts = [
  "I've completed my B.Tech in Computer Science Engineering in 2023.",
  `I've previously worked with "Cisco" and "Interview Kickstart" as a software development engineer. Currently I'm working with "Physics Wallah" 🦄 where I'm owning the complete backend service in "Team Rancho".`,
];

export default function Home() {
  const router = useRouter();
  const [startTime, setStartTime] = useState(0);
  const tinkerer = useRef();
  const timer = useRef();
  const [textElement, setTextElement] = useState("");

  const mouseEnter = () => {
    setStartTime(Date.now());
    // clearTimeout(timer.current);
    tinkerer.current.style.transform = "rotate(-90deg)";
  };

  const mouseLeave = () => {
    setStartTime((startTime) => {
      if (Date.now() - startTime < 1000) {
        timer.current = setTimeout(() => {
          tinkerer.current.style.transform = "rotate(0deg)";
        }, 1000 - (Date.now() - startTime));
      } else {
        tinkerer.current.style.transform = "rotate(0deg)";
      }
      return 0;
    });
  };

  useEffect(() => {
    tinkerer.current?.addEventListener("mouseenter", mouseEnter);
    tinkerer.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      tinkerer.current?.removeEventListener("mouseenter", mouseEnter);
      tinkerer.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, [tinkerer.current]);

  let charIndex = 0, final = 0, timeout = 1000;

  function highlight(keywords) {
    setTextElement((text) => {
      let formattedText = text;
      for (const word of keywords) {
        if (text.includes(word)) {
          const idx = formattedText.indexOf(word);
          formattedText = formattedText.substring(0, idx) +
            `<strong>${formattedText.substring(idx, idx + word.length)}</strong>` +
            formattedText.substring(idx + word.length);
        }
      }
      return formattedText;
    })
  }

  function typeText(textToType, callback) {
    if (charIndex < textToType.length) {
      setTextElement((textElement) => {
        let c = charIndex;
        charIndex++;
        return textElement + textToType[c];
      });
      setTimeout(() => {
        typeText(textToType, callback);
      }, 30);
    } else {
      setTimeout(() => {
        if (!final) {
          setTextElement((text) => text + "<br /><br />");
          charIndex = 0;
          final = 1;
          timeout = 0;
          typeText(texts[1], callback);
        } else {
          // Call the callback function when typing is complete
          if (typeof callback === "function") {
            callback();
          }
        }
      }, timeout);
    }
  }

  useEffect(() => {
    typeText(texts[0], () => {
      const keywords = ["Cisco", "Interview Kickstart", "Physics Wallah", "Team Rancho"];
      highlight(keywords);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Prakhar Rai</title>
        <meta name="description" content="This is the portfolio of Prakhar Rai." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="content" >
        <p style={{ fontSize: "35px" }}>
          This is the site of{" "}
          <span style={{ fontWeight: 600 }}>Prakhar Rai</span>, developer,
          engineer &{" "}
          <span
            ref={tinkerer}
            className="tinkerer"
          >
            <span
              style={{ color: "red", fontWeight: 700, textDecoration: "underline" }}
            >
              tinkerer
            </span>
            <span style={{ color: "#000" }}>.</span>
          </span>
        </p>
        <p id="text">
          <span dangerouslySetInnerHTML={{ __html: textElement }} />
          <span className="cursor">|</span>
        </p>
        <ul className="index">
          <li
            onClick={() => {
              router.push("/blogs");
            }}
          >
            <span className="index-date">
              <FontAwesomeIcon icon={faBookJournalWhills} />
            </span>
            <u>Blogs</u>
          </li>
          <li
            onClick={() => {
              router.push("/about");
            }}
          >
            <span className="index-date">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <u>About me</u>
          </li>
          <li
            onClick={() => {
              router.push("/contact");
            }}
          >
            <span className="index-date">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <u>Contact</u>
          </li>
        </ul>
      </div>
    </>
  );
}
