import React, { useState } from 'react'

const Input = ({label, state, setState, type = 'text'}) => {
  console.log(state);
  return (
    <div>
            <div className="form-floating mt-2">
             <input type={type} className="form-control" value={state}  onChange={e => setState(e.target.value)}
             id="floatingInput" placeholder={label}/>
             <label htmlFor='floatingInput'>{label}</label>
            </div>
    </div>
  )
}

export default Input