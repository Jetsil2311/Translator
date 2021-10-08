import React from 'react'

export const Translation = ({inputValue}) => {
    return (
        <>
            <textarea readOnly value={ inputValue && "Te amo" } placeholder="Traducción"/>
        </>
    )
}
