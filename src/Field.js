import React from 'react'

const Field = (props) => {
    return (
        <div>
            {props.children}
            <input type = "text" name = {props.name} onChange = {props.handleChange}></input>
        </div>
    )
}

export default Field;