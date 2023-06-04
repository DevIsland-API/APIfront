import React from 'react'
import Page from '../../components/home/home'

type Props = {}

const HomePage = (props: Props) => {

  document.title = 'Home'

  return (
    <Page />
  )
}

export default HomePage;