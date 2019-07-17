export interface IRefElement {
  current: {
    addEventListener: (arg1: string, arg2: () => {}) => {},
    removeEventListener: (arg1: string, arg2: () => {}) => {},
    requestFullscreen: () => {},
    mozRequestFullscreen: () => {},
    webkitRequestFullscreen: () => {},
    msRequestFullscreen: () => {},
    style: {
      transition: string,
      opacity: number
    }
  }
}