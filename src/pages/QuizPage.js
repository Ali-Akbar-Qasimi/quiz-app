import React from "react"
import data from "../data"

export default function QuizPage(){
    const [question,setQuestion] = React.useState()
    const [next,setNext] = React.useState(1)
    const [correctAnswers,setCorrectAnswers] = React.useState(0)
    const [remainingQuestions,setRemainingQuestions] = React.useState(data.questions.length)
    const [wrongAnswers,setWrongAnswers] = React.useState(0)
    const numberThatHaveBeenSelected = React.useRef(0)


    function handleNext(){
        setNext(oldNext => oldNext + 1)
        setRemainingQuestions(prevRemainingQuestions => prevRemainingQuestions - 1)
        numberThatHaveBeenSelected.current = 0
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
                                       
                    function handleSelect(e){
                        let checkBTN = document.querySelector('.check')
                        let alert = document.querySelector('.alert')
                        let container = document.querySelector('.answers')
                        console.log(numberThatHaveBeenSelected.current)
                        console.log(question.numberThatCanBeSelected)
                        if(e.target.parentElement.className === ''){
                            numberThatHaveBeenSelected.current = numberThatHaveBeenSelected.current + 1
                            e.target.parentElement.className = 'selected'
                            checkBTN.style.display = 'block'
                            alert.style.display = 'none'
                        }else if(e.target.parentElement.className === 'selected'){
                            e.target.parentElement.className = ''
                            alert.style.display = 'none'
                            numberThatHaveBeenSelected.current = numberThatHaveBeenSelected.current - 1
                            console.log(numberThatHaveBeenSelected.current)
                        }
                        if(numberThatHaveBeenSelected.current === question.numberThatCanBeSelected + 1){
                            alert.style.display = 'block'
                            console.log('you can only select ' + question.numberThatCanBeSelected + ' answers')
                            numberThatHaveBeenSelected.current = numberThatHaveBeenSelected.current - 1
                            e.target.parentElement.className = ''
                            console.log(question.numberThatCanBeSelected)
                        }
                    }


                    function handleCheck(){
                        let container = document.querySelector('.answers')
                        let selected = document.querySelectorAll('.selected')
                        let next = document.querySelector('.next')
                        let pleaseSelect = document.querySelector('.please-select')

                        if(numberThatHaveBeenSelected.current < question.numberThatCanBeSelected){
                            console.log('please select ' + question.numberThatCanBeSelected + ' answers')
                            pleaseSelect.style.display = 'block'
                            return false
                        }else if(numberThatHaveBeenSelected.current !== question.numberThatCanBeSelected - 1){
                            pleaseSelect.style.display = 'none'
                        }else{
                            pleaseSelect.style.display = 'none'
                        }


                        console.log(numberThatHaveBeenSelected.current)
                        
                        for(let i = 0; i < container.children.length; i++) {
                             if(container.children[i].classList !== 'selected'){

                            }
                            if(selected[i].attributes[0].value === 'true'){
                                if(question.numberThatCanBeSelected === 1){
                                    setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 1)
                                }
                                if(question.numberThatCanBeSelected === 2){
                                    if(selected[0].attributes[0].value === 'false' || selected[1].attributes[0].value === 'false'){
                                        setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 1)
                                        setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 0)
                                    }else if(selected[i].attributes[0].value === 'true'){
                                        setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 0.5)
                                    }
                                }

                                if(question.numberThatCanBeSelected === 4){
                                    if(selected[0].attributes[0].value === 'false' || selected[1].attributes[0].value === 'false' || selected[2].attributes[0].value === 'false' || selected[3].attributes[0].value === 'false'){
                                        setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 0.5)
                                        setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 0)
                                    }else if(selected[i].attributes[0].value === 'true'){
                                        setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 0.25)
                                    }
                                }
                                console.log('correct')
                                selected[i].classList = 'correct'
                                container.style.pointerEvents = 'none'
                                next.style.display = 'block'
                            }else if(selected[i].attributes[0].value === 'false'){
                                if(question.numberThatCanBeSelected === 1){
                                    setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 1)
                                }
                                if(question.numberThatCanBeSelected === 2){
                                    // if(selected[0].dataset.value === 'true' || selected[1].dataset.value === 'true'){
                                    //     setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 1)
                                    //     setCorrectAnswers(oldCorrectAnswers => oldCorrectAnswers + 0)
                                    // }else
                                    if(selected[i].attributes[0].value === 'false' && selected[0].attributes[0].value !== 'true' && selected[1].attributes[0].value !== 'true'){
                                        setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 0.5)
                                    }
                                }
                                if(question.numberThatCanBeSelected === 4){
                                    if(selected[i].attributes[0].value === 'false' && selected[0].attributes[0].value !== 'true' && selected[1].attributes[0].value !== 'true'){
                                        setWrongAnswers(oldWrongAnswers => oldWrongAnswers + 0.25)
                                    }
                                }
                                selected[i].classList = 'wrong'
                                next.style.display = 'block'
                                container.style.pointerEvents = 'none'
                                console.log('wrong')
                            }
                            let children = container.children
                            let childrenArray = Array.from(children)
                            console.log(children)
                            childrenArray.forEach(child => {
                                console.log(child)
                                if(child.attributes[0].value === 'true'){
                                    console.log('show correct')
                                    child.classList = 'correct'
                                }
                            })
                        }
                    }

                    if(question.id === next){
                        return(
                            <div key={question.id} className="container">
                                <h1 className="please-select">please select {question.numberThatCanBeSelected} answers</h1>
                                <h1 className="alert">you can only choose {question.numberThatCanBeSelected}</h1>

                                { question.image && <img src={question.image} alt='image'/> }


                                <h1 className="question">{question.question}</h1>
                                <div className="answers">
                                    { question.answers[0] && <div onClick={handleSelect} data-value={question.answers[0].correct} >
                                        {question.answers[0].text}
                                        <input type='checkbox' value={question.answers[0].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div> }                      
                                    { question.answers[1] && <div onClick={handleSelect} data-value={question.answers[1].correct} >
                                        {question.answers[1].text}
                                        <input type='checkbox' value={question.answers[1].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[2] && <div onClick={handleSelect} data-value={question.answers[2].correct} >
                                        {question.answers[2].text}
                                        <input type='checkbox' value={question.answers[2].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[3] &&  <div onClick={handleSelect} data-value={question.answers[3].correct} >
                                        {question.answers[3].text}
                                        <input type='checkbox' value={question.answers[3].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[4] && <div onClick={handleSelect} data-value={question.answers[4].correct} >
                                        {question.answers[4].text}
                                        <input type='checkbox' value={question.answers[4].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[5] && <div onClick={handleSelect} data-value={question.answers[5].correct} >
                                        {question.answers[5].text}
                                        <input type='checkbox' value={question.answers[5].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[6] && <div onClick={handleSelect} data-value={question.answers[6].correct} >
                                        {question.answers[6].text}
                                        <input type='checkbox' value={question.answers[6].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
                                    { question.answers[7] && <div onClick={handleSelect} data-value={question.answers[7].correct} >
                                        {question.answers[7].text}
                                        <input type='checkbox' value={question.answers[7].text} />
                                        {/* <input name="answers" type='radio'/> */}
                                    </div>}
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