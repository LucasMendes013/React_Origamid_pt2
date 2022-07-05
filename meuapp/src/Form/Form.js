import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
      <p>
        <label htmlFor='nome'>Nome</label>
        <Input />
      </p>
      <label htmlFor='Email'>Email</label>
      <Input />
      <Button />
      </div>
  )
}

export default Form