import React, { useState }from 'react'



const RiddleForm = (props) => {

    const [question, setQuestion ] = useState(props.question || '');
    const [level, setLevel ] = useState(props.level || '');
    const [option1, setOption1 ] = useState(props.option1 || '');
    const [option2, setOption2 ] = useState(props.option2 || '');
    const [option3, setOption3 ] = useState(props.option3 || '');
    const [option4, setOption4 ] = useState(props.option4 || '');
    const [answer, setAnswer ] = useState(props.answer || '');


    const handleSubmit = (e)=>{
        
        e.preventDefault()
        console.log({question})
        if(props.id){
            props.updateRiddle({question, level, option1, option2, option3, option4, answer, id: props.id})
        } else {
            props.addRiddle({question},)
        }
    }
        return (
        <div>
           
            <h1>RiddleForm</h1>
           
            <h1>{props.id ? "EDIT" : "NEW"}</h1>
            <p>id: {props.id}</p>
          
            <form onSubmit={handleSubmit}>
                <p>Question:</p>
                <input value={question} onChange={(e) => setQuestion(e.target.value)} />
                <p>Level:</p>
                <input value={level} onChange={(e) => setLevel(e.target.value)} />
                <p>Option1:</p>
                <input value={option1} onChange={(e) => setOption1(e.target.value)} />
                <p>Option2:</p>
                <input value={option2} onChange={(e) => setOption2(e.target.value)} />
                <p>Option3:</p>
                <input value={option3} onChange={(e) => setOption3(e.target.value)} />
                <p>Option4:</p>
                <input value={option4} onChange={(e) => setOption4(e.target.value)} />
                <p>Answer:</p>
                <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
                <button className="button">add</button>
            </form>
        </div>
    )
}

export default RiddleForm