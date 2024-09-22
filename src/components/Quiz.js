// src/components/Quiz.js
import React from "react";
import Question from "./Question";

function Quiz({ question, onAnswer }) {
    const handleChoiceClick = (choice) => {
        const isCorrect = choice === question.answer;
        onAnswer(isCorrect);
    };

    return (
        <div>
            <Question text={question.question} />
            <div className="choices">
                {question.choices.map((choice, index) => (
                    <button key={index} onClick={() => handleChoiceClick(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Quiz;
