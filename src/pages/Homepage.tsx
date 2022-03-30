import React from 'react'
import HomeLeft from '../components/HomeLeft'
import HomeRight from '../components/HomeRight'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <main className="grid grid-cols-8 gap-3 my-2 relative">
      <HomeLeft />
      <HomeRight />
    </main>
  )
}

export default Homepage