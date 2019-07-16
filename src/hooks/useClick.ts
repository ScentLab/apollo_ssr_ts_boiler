import { useEffect, useRef } from 'react'
import { IRefElement } from './types'

export default (onClick: () => {}) => {
  const element: IRefElement = useRef()

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, [])
  return element
}

/*
[example] useClick

export default () => {
  const hi = () => conosole.log("hi")
  const clicked = useClick()

  return (
    <div ref={clicked}>Hi</div>
  )
}
*/