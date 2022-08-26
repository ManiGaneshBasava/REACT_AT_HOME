import React, { useRef } from 'react'

function Form() {

  const form = useRef(null)

  const saveHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    for (const [key, value] of formData) {
      console.log(`key is an ${key} ,value is an ${value}`)
      console.log(typeof(key));
      console.log(typeof(value));
    }
    console.log(formData);
  }

  return (
    <div>
      <form ref={form} onSubmit={saveHandler}>
        <label>First Name :- </label>
        <input type='text' name='first_name' placeholder='Enter First Name' ></input><br />
        <label>Last Name :- </label>
        <input type='text' name='last_name' placeholder='Enter Last Name' ></input><br />
        <label>Email :- </label>
        <input type='text' name='email' placeholder='Enter Email' ></input><br />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Form