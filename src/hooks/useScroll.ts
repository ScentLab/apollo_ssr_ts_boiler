import { useState, useEffect } from 'react'

export default () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  })

  const onScroll = () =>
    setState({
      x: window.scrollX,
      y: window.scrollY
    })

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return window.removeEventListener('scroll', onScroll)
  }, [])

  return state
}

/*
[example] useScroll

export default () => {
  const { y } = useScroll()
  return (
    <div style={{ height: '1000vh' }}>
      <div style={{ position: 'fixed', color: y < 100 ? 'red' : 'blue'}}>Hi</div>
    </div>
  )
}
*/