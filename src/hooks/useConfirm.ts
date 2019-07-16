export default (message = '', onConfirm: () => {}, onCancel: () => {}) => () =>
  confirm(message) ? onConfirm() : onCancel()