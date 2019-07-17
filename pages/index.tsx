import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Layout } from '../components'
import { useAction } from '../hooks'
import { exampleModule } from '../modules'


export default () => {
  const example = useAction(exampleModule)
  const exampleData = useSelector(({ example }) => example.example)

  useEffect(() => {
    example('exmaple')
  }, [example])

  console.log(exampleData)
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
    </Layout>)
}
