import React from 'react'
import './css/botao.css'
export default props =>
    {

        const widthButton = `col-md-${props.width}` 
        return (<div>
            <button className = {`btn btn-secondary botao ${widthButton}`}>{props.char}</button>
        </div>
        )
    }