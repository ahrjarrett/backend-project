import React from 'react'
import Tabs from './Tabs'
import styled from 'styled-components'

const Styles = styled.div`
  height: 64px;
  background-color: rgb(9, 20, 28, 1);
  width: 100%;
`

function TabBar() {
  return (
    <Styles>
      <Tabs />
    </Styles>
  )
}

export default TabBar
