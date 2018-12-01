import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  width: 100%;
  h1 {
    text-align: center;
  }
`

function Left() {
  return (
    <Styles>
      <h1>Dashboard</h1>
    </Styles>
  )
}

export default Left
