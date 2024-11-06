import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import questions from "../data/questions.json"
import Button from './Button'
import CircularProgressBar from './CircularProgressBar'

const Question = () => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    const [selected, setSelected] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    const q = questions.find((question) => question.id === questionId);

    var count = Number(questionId);

    const handleRadioChange = (value) => {
        setSelected(value);
    }

    const handleOnClick = () => {
        count = count + 1;
        setSelectedAnswer([
            ...selectedAnswer,
            selected
        ])
        navigate(`/question/${count}`);
    }

    const handleOnClickDiscoverResult = () => {
        navigate('/result');
    }

    const handleBackOnClick = () => {
        {
            selectedAnswer.length > 0 &&
                setSelectedAnswer(
                    selectedAnswer.filter((selAns, index) => index !== (selectedAnswer.length - 1))
                );
        }
        navigate(-1);
    }

    return (
        <div className='question'>
            <h1 className='question-name'>{q.question}</h1>
            <div className='radio-button-group'>
                {q.answers.map((answer, index) => (
                    <label className={`radio-button ${selected === answer.substring(3).toLowerCase() ? "selected" : ""}`} key={index}>
                        <input
                            type='radio'
                            value={answer.substring(3).toLowerCase()}
                            checked={selected === answer.substring(3).toLowerCase()}
                            onChange={() => handleRadioChange(answer.substring(3).toLowerCase())}
                        />
                        {answer}
                    </label>
                ))}
            </div>
            <div className='question-btn-group'>
                <a className='question-btn-link' onClick={handleBackOnClick}>Back</a>
                <Button
                    styling={'question-btn'}
                    onClick={questionId !== '5' ? handleOnClick : handleOnClickDiscoverResult}
                    content={questionId !== '5' ? 'Next question' : 'Discover your results'}
                />
            </div>
            <div className='circular-progress-bar'>
                <CircularProgressBar
                    value={questionId}
                    maxValue={5}
                />
            </div>
        </div>
    )
}

export default Question
