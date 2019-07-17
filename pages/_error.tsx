import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    const { ...props }: any = this.props
    return (
      <p>
        {props.statusCode
          ? `An error ${props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}
