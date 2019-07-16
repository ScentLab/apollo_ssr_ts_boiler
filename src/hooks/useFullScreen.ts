import { useRef } from 'react'
import { IRefElement } from './types';

export default (onFullScreen = (value: boolean) => value) => {
  const element: IRefElement = useRef()

  const enter = () => {
    element.current.requestFullscreen()
    onFullScreen(true)
  }

  const exit = () => {
    document.exitFullscreen()
    onFullScreen(false)
  }

  return { element, enter, exit }
}

/*
[example] useFullScreen

export default () => {
  const onFullscreen = isFullscreen => {
    console.log(isFullscreen ? "isFull" : "isNotFull")
  }
  const { enter, exit } = useFullScreen(onFullscreen)
  return (
    <div>
      <button onClick={enter}>enter fullscreen</button>
      <button onClick={exit}>exit fullscreen</button>
    </div>
  )
}
*/