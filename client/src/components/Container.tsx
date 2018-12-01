import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: row;


`

interface ContainerProps {
  children: React.ReactNode,
}

function Container(props: ContainerProps) {
  return (
    <Styles>
      {props.children}
    </Styles>
  )
}

export default Container
