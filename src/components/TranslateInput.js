import React from 'react'

export const TranslateInput = ({setInputValue}) => {

    

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <input 
                type="text"
                onChange={ handleInputChange }
                placeholder="Escribe un texto para traducir"
            />
        </>
    )
}
