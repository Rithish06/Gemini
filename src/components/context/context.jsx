import { createContext, useState } from "react";
import run from "../../config/gemini";

export const context = createContext()

const ContextProvider = (props) => {


    const [input, setInput] = useState("")
    const [recentPrompt,setRecentpromt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async(prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
        setRecentpromt(input)
    }

    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentpromt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    }

    // onSent("what is react js")

    return(
        <context.Provider value = {contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider;