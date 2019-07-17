import { createAction, handleActions } from 'redux-actions'

const initialState = { example: false }
export const EXAMPLE_MODULE = createAction('example/example_module')

export default handleActions({
  ['example/example_module']: (state, { payload }) => ({ ...state, ...payload }),
}, initialState)

export const exampleModule = (value: string) => {
  try {
    console.log(value)
    return EXAMPLE_MODULE({ example: true })
  } catch (err) {
    throw new Error('this is error!')
  }
}
