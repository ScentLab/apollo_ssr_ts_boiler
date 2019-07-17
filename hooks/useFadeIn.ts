import { useEffect, useRef } from 'react'
import { IRefElement } from './types'

export default (duration = 1, delay = 0) => {
  const element: IRefElement = useRef()
  useEffect(() => {
    if (element.current) {
      const { current } = element
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  })
  return { ref: element, style: { opacity: 0 } }
}

/*
[example] useFadeIn

export default () => {
  const fadeInDiv = useFadeIn(10, 2)
  -> duration: 10 sec, delay: 2sec

  return (
    <div {...fadeInDiv}>Hi</div>
  )
}
*/
