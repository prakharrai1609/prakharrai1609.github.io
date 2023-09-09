import React, { useEffect, useState } from "react";
import { Utils } from "@/common/utils";

const TypeWriter = (props) => {
  const [textElement, setTextElement] = useState("");

  async function typeWriter(texts) {
    for (const text of texts) {
      for (const char of text) {
        await Utils.sleep(30);
        setTextElement((line) => line + char);
      }

      if (texts.indexOf(text) < texts.length - 1) {
        await Utils.sleep(1000);
        setTextElement((line) => line + "<br /><br />");
      }
    }
  }

  useEffect(() => {
    typeWriter(props.texts);
  }, []);

  return (
    <p>
      <span dangerouslySetInnerHTML={{ __html: textElement }} />
      <span className="cursor">|</span>
    </p>
  );
};

export default TypeWriter;
