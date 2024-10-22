import styled from "styled-components";
import { useState } from "react";

const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 30px;

  .sub-title {
    font-size: 34px;
    margin: 90px 0 30px;
  }

  .question-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
  }

  .question-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
  }

  hr {
    height: 1px;
    background-color: var(--secondary-bg-color);
    border: none;
    width: 100%;
  }

  .answer-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.7s ease;
  }

  .answer-wrapper.show {
    max-height: 500px;
  }

  .answer-text {
    font-size: 14px;
  }

  @media and screen (width >= 1305px) {
    padding: 80px .input-wrapper {
      padding: 32px 100px;
    }
  }
`;

const questionsData = [
  {
    id: 1,
    question: "How do I apply?",
    answer: `Visit the Application Page: Head to our grants portal where you'll find all the available grant categories and funding opportunities. Choose the one that best aligns with your project or initiative.`,
  },
  {
    id: 2,
    question: "Can I apply as a U.S. based person/company?",
    answer: `Before submitting, ensure you have a well-structured proposal. This should include a clear project description, objectives, timelines, and a detailed budget plan.`,
  },
  {
    id: 3,
    question: "How will I be compensated",
    answer: `Fill out the application form with your personal details, team information, and attach your proposal. Make sure to provide any additional links that demonstrate your experience.`,
  },
  {
    id: 4,
    question: "What type of project will qualify for a Grant?",
    answer: `Review your application for accuracy and completeness, then submit it.`,
  },
  {
    id: 5,
    question:
      "What is the application timeline? When can I expect to hear back?",
    answer: `Review your application for accuracy and completeness, then submit it.`,
  },
  {
    id: 6,
    question: "How can I increase my chances of getting funded?",
    answer: `Review your application for accuracy and completeness, then submit it.`,
  },
  {
    id: 7,
    question: "How often do you approve new Rounds of funding?",
    answer: `Review your application for accuracy and completeness, then submit it.`,
  },
];

function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    // If the same question is clicked, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <QuestionsWrapper>
      <h3 className='sub-title'>Grant application process</h3>
      {questionsData.map((question) => (
        <>
          <div
            className='question-wrapper'
            onClick={() => toggleAnswer(question.id)}
            onKeyDown={(e) => e.key === "Enter" && toggleAnswer(question.id)}
            tabIndex={0}
          >
            <div className='question-row'>
              <p className='question-text'>{question.question}</p>
              <p className='plus-icon'>
                {openIndex === question.id ? "-" : "+"}
              </p>
            </div>
            <div
              className={`answer-wrapper ${
                openIndex === question.id ? "show" : ""
              }`}
            >
              <p className='answer-text'>{question.answer}</p>
            </div>
          </div>
          <hr />
        </>
      ))}
    </QuestionsWrapper>
  );
}

export default Questions;
