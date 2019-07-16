import { useEffect } from 'react'

export default (onBefore: () => {}) => {
  const handleBeforeLeave = (e: { clientY: number }) => {
    const { clientY } = e
    return clientY < 0 ? onBefore() : false
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handleBeforeLeave)
    return () =>
      document.removeEventListener("mouseleave", handleBeforeLeave)
  }, [])
}

/*
[example] useBeforeLeave

export default () => {
  const hello = console.log("Hello")
  useBeforeLeave(hello)

  return (
    <div>Hi</div>
  )
}
*/