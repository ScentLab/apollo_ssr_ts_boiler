import { useEffect, useRef } from 'react'

interface IElement {
  current: {
    addEventListener: (arg1: string, arg2: () => {}) => {},
    removeEventListener: (arg1: string, arg2: () => {}) => {},
  }
}

export default (onHover: () => {}) => {
  const element: IElement = useRef()

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