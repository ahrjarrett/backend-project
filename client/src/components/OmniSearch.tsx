import React, { useState } from 'react'
import styled from 'styled-components'

import MagnifyingGlass from './icons/MagnifyingGlassIcon'

const Styles = styled.div`
  flex: 0 0 auto;
  border-color: rgba(0,0,0,.1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  background-color: rgba(0,0,0,.02);
  padding: 25px;
  label {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 12px 14px 13px 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
  }
  svg {
    width: 16px;
    height: 16px;
  }
  input {
    border: none;
    margin-left: 10px;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 300;
  }
`

function OmniSearch() {
  return (
    <>
      <Styles>
        <label>
          <MagnifyingGlass />
          <input placeholder="Search ..." />
        </label>
      </Styles>
    </>
  )
}

export default OmniSearch
