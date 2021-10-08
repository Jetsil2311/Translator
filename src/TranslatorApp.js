import React, {useState} from 'react'
import { TranslateInput } from './components/TranslateInput'
import { Translation } from './components/Translation'

export const TranslatorApp = () => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className="box">
            {inputValue !== '' ? <div><h2>Traductor</h2> <i className="fas fa-heart heart"></i></div> : <h2>Traductor</h2> }
            <hr />
            <TranslateInput setInputValue={setInputValue} />

            <Translation inputValue={inputValue}/>
            <hr />
        </div>
    )
}
