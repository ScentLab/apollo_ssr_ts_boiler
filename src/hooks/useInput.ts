import { useState } from 'react'

export default (initialValue: string, validator = (value: any) => value ? true : false) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: { target: { value: string } }) =>
    value && validator(value) ?
      setValue(e.target.value) : null

  return { value, onChange }
}

/*
[example] useInput

export default () => {
  const name = useInput('initial')

  return (
    <input {...name}/>
  )
}
*/