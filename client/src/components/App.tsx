import React, { Component } from 'react'
import styled from 'styled-components'
import Container from './Container'
import Left from './Left'
import Right from './Right'
import TabBar from './TabBar'


const GlobalStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  animation: kNIJfT 0.5s ease-out 0.2s 1 normal forwards running;
  color: rgba(0, 0, 0, 0.8);
  background: #172a3a;
  display: flex;
  color: white;
  -webkit-font-smoothing: antialiased;
`

class App extends Component {
  render() {
    return (
      <GlobalStyles>
        <TabBar />
        <Container>
          <Left />
          <Right />
        </Container>
      </GlobalStyles>
    )
  }
}

export default App
