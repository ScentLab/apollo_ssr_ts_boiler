export default () => {
  const listener = (e: Event) => {
    e.preventDefault()
    e.returnValue = false
  }
  const enablePrevent: () => void = () => window.addEventListener("beforeunload", listener)
  const disablePrevent: () => void = () => window.removeEventListener("beforeunload", listener)

  return { enablePrevent, disablePrevent }
}

/*
[example] usePreventLeave

export default () => {
  const {enablePrevent, disablePrevent} = usePreventLeave()

  return (
    <div>
      <button onClick={enablePrevent}>enablePrevent</button>
      <button onClick={disablePrevent}>disablePrevent</button>
    </div>
  )
}
*/
