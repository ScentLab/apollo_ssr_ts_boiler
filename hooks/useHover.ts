import { useEffect, useRef } from 'react'
import { IRefElement } from './types'

export default (onHover: () => {}) => {
  const element: IRefElement = useRef()

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover)
      }
    }
  }, [])
  return element
}

/*
[example] useHover

export default () => {
  const hi = () => conosole.log("hi")
  const hovered = useHover()

  return (
    <div ref={hovered}>Hi</div>
  )
}
*/
