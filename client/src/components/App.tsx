import React from 'react'
import Container from './Container'
import Left from './Left'
import Right from './Right'
import TabBar from './TabBar'

function App() {
  return (
    <>
      <TabBar />
      <Container>
        <Left />
        <Right />
      </Container>
    </>
  )
}

export default App
