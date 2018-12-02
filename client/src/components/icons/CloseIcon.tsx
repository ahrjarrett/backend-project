import React from 'react'
import styled from 'styled-components'

const I = styled.i`
  transform: rotate(0deg);
  display: flex;
  align-items: center;
  margin-left: 10px;
  svg {
    width: 12px; 
    height: 11px;
    stroke: rgb(74, 85, 95);
    stroke-width: 7px;
    fill: none;
  }
`

interface IconProps {
  hidden: boolean;
  height?: string;
  width?: string;
}

function CloseIcon({ hidden, ...dimensions }: IconProps) {
  const style = {
    ...dimensions,
    display: hidden ? 'none' : 'flex',
  }
  return (
    <I>
      <svg style={style} viewBox='0 0 50 50'>
        <line x1="4" y1="4" x2="46" y2="46"></line>
        <line x1="46" y1="4" x2="4" y2="46"></line>
      </svg>
    </I>
  )
}

export default CloseIcon
