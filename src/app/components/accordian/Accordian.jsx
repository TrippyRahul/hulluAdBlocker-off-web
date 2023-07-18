"use client";

import React, { useState } from "react";
import styles from "./accordian.module.scss";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to get hulu without ads?",
    ans: "If you get spammed with ads and thinking how to get hulu without ads, then let us tell you that by installing it, you can get rid of annoying ads.",
  },
  {
    id: 2,
    ques: "Why are there ads on hulu?",
    ans: "There are ads on Hulu because ads help generate revenue for Hulu. But installing the extension, it will remove ads from hulu.",
  },
  {
    id: 3,
    ques: "Can you get hulu without ads?",
    ans: "Yes! By simply downloading and installing, you can get hulu commercial free and enhance your experience with hulu no commercials.",
  },
  {
    id: 4,
    ques: "How to remove ads in hulu?",
    ans: "Don’t freak out as we have the answer to your how to skip hulu ads question! The extension is designed especially for you.",
  },
  {
    id: 5,
    ques: "How to get rid of ads on hulu?",
    ans: "All you need to do is download the extension. By this you can watching your favorite content.",
  },
  {
    id: 6,
    ques: "Why does hulu have so many ads?",
    ans: "Hulu has so many ads because it is a primary source of income for Hulu. But after having so many ads you can still enjoy your favorite movies by simply installing hulu ad blolcker.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
      console.log("Show");
    } else {
      setShowAnswer(questionId);
      console.log("er");
    }
  };

  return (
    <div className={styles.accordian} id="accordian">
      {/* <Image
        src="/accor-bg.svg"
        width={1817.37}
        height={1045.26}
        style={{ position: "absolute", top: "-20%", left: "-10%" }}
        alt="accordian-bg"
      /> */}
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <Image src="/add.svg" width={50} height={50} alt="add-logo"/>
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <button>GET TRUE ADBLOCKER NOW</button>
      </div>
    </div>
  );
};

export default Accordian;
