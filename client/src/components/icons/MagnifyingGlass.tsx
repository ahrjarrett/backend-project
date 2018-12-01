import React from 'react'
import styled from 'styled-components'

const Styles = styled.i`
  transform: rotate(0deg);
  display: flex;

`

function MagnifyingGlass() {
  return (
    <Styles>
      <svg stroke="rgba(0, 0, 0, 0.3)" strokeWidth="3px" fill="none" viewBox="0 0 50 50"><circle cx="17.82" cy="18.11" r="16.21"></circle><line x1="29.28" y1="29.57" x2="48.21" y2="48.5"></line></svg>
    </Styles>
  )
}

export default MagnifyingGlass