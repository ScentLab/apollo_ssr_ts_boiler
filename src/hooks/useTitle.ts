import { useState, useEffect } from 'react'

export default (initialTitle = '') => {
  const [title, setTitle] = useState(initialTitle)

  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }

  useEffect(updateTitle, [title])

  return setTitle
}

/*
[example] useTitle

export default () => {
  const titleUpdater = useTitle('Updating...)

  return (
    <div onClick={titleUpdater}>update!</div>
  )
}
*/