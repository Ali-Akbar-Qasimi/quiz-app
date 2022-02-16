import React from "react"
import data from "../data"

export default function QuizPage(){
    const [question,setQuestion] = React.useState()
    const [next,setNext] = React.useState(1)
    const [correctAnswers,setCorrectAnswers] = React.useState(0)
    const [remainingQuestions,setRemainingQuestions] = React.useState(data.questions.length)
    const [wrongAnswers,setWrongAnswers] = React.useState(0)


    function handleNext(){
        setNext(oldNext => oldNext + 1)
        setRemainingQuestions(prevRemainingQuestions => prevRemainingQuestions - 1)
    }
    if(next === data.questions.length){
        let nextBTN = document.querySelector('.next')
        nextBTN.textContent = "Result"
    }


    React.useEffect(()=>{
        setQuestion(oldQuestion=>{
            if(next === data.questions[data.questions.length - 1].id + 1){
                function startAgain(){
                    setNext(1)
                    setCorrectAnswers(0)
                    setWrongAnswers(0)
                    setRemainingQuestions(data.questions.length)
                }
                return(
                    <div>
                        <h1>Result</h1>
                        {correctAnswers !== 0 && <p>you have {correctAnswers} correct answers</p>}
                        {wrongAnswers !== 0 && <p>you have {wrongAnswers} wrong answers</p>}
                        <div onClick={startAgain} className='button'>Start Again</div>
                    </div>
                )
            }

            return(
                oldQuestion = data.questions.map(question=>{
                    function handleCheck(){
                        let container = document.querySelector('.answers')
                        let selected = document.querySelector('.selected')
                        let next = document.querySelector('.next')
                        for(let i = 0; i < container.children.length; i++) {
                            if(container.children[i].className !== 'selected'){

                            }else if(selected.dataset.value === 'true'){
                                setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 1)
                                selected.classList = 'correct'
                                container.style.pointerEvents = 'none'
                                next.style.display = 'block'
                            }else{
                                setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 1)
                                selected.classList = 'wrong'
                                next.style.display = 'block'
                                container.style.pointerEvents = 'none'
                            }
                            if(container.children[i].dataset.value === 'true'){
                                container.children[i].classList = 'correct'
                            }
                        }
                    }
                    function handleSelect(e){
                        let checkBTN = document.querySelector('.check')
                        let answers = document.querySelector('.answers')
                        if(e.target.checked = true) {
                            for(let i = 0 ;i < answers.children.length ;i++){
                                answers.children[i].className = ''
                            }
                            e.target.parentElement.classList = 'selected';
                            checkBTN.style.display = 'block'
                        }
                    }
                    if(question.id === next){
                        return(
                            <div key={question.id} className="container">
                                <h1 className="question">{question.question}</h1>
                                <div className="answers">
                                    <div onClick={handleSelect} data-value={question.answers[0].correct} >
                                        {question.answers[0].text}
                                        <input name="answers" type='radio'/>
                                    </div>
                                    <div onClick={handleSelect} data-value={question.answers[1].correct} >
                                        {question.answers[1].text}
                                        <input name="answers" type='radio'/>
                                    </div>
                                    <div onClick={handleSelect} data-value={question.answers[2].correct} >
                                        {question.answers[2].text}
                                        <input name="answers" type='radio'/>
                                    </div>
                                    <div onClick={handleSelect} data-value={question.answers[3].correct} >
                                        {question.answers[3].text}
                                        <input name="answers" type='radio'/>
                                    </div>
                                </div>
                                <div className="btn-container">
                                    <button className="check" onClick={handleCheck}>Check</button>
                                    <button className="next" onClick={handleNext}>Next</button>
                                </div>
                                <div className="correct-and-wrong-container">
                                    {correctAnswers !== 0 && <h1 className="correct-answers">{correctAnswers} correct</h1>}
                                    {wrongAnswers !== 0 && <h1 className="wrong-answers">{wrongAnswers} wrong</h1>}
                                </div>
                                <p className="remaining">{remainingQuestions} question remaining</p>
                            </div>
                        )
                    }
                })
            )

        })
    },[next])


    return(
        <section>
            {question}
        </section>
    )
}