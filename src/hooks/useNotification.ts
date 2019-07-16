export default (title: string, options: {}) =>
  () => Notification.permission !== 'granted' ?
    Notification.requestPermission()
      .then(permission =>
        permission !== 'granted' ?
          new Notification(title, options) : '') : new Notification(title, options)

/*
[example] useNotification

export default () => {
  const notif = useNotification("Hi", {
    body: 'hi2'
  })

  return (
    <div>
      <button onClick={notif}>notification</button>
    </div>
  )
}
*/