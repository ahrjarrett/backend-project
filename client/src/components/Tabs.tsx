import React from 'react'
import CloseIcon from './icons/CloseIcon'
import styled from 'styled-components'


const TabsStyles = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;

  .tab {
    box-sizing: border-box;
    height: 43px;
    padding: 9px 16px 10px;
    margin-left: 10px;
    background-color: #0f202e;
    opacity: 0.5;
    border-bottom: 2px solid #172a3a;
    border-radius: 3px 3px 0 0;
    font-size: 1.5rem;
    line-height: 1.6;
    cursor: pointer;
    display: flex;
  }

  .tab:first-of-type {
    margin-left: 0;
  }

  .active-tab, .tab:hover {
    background-color: #172a3a;
    color: #fff;
    opacity: 1;
  }

`

const TabStyles = styled.div`


`

interface TabProps {
  title: String,
  iconUrl?: String,
  active?: boolean,
}

function Tab(props: TabProps) {
  return (
    <div className={props.active ? 'active-tab tab' : 'tab'}>
      <div className='tab-title'>{props.title}</div>
      <CloseIcon hidden={false} />
    </div>
  )
}

function Tabs() {
  return (
    <TabsStyles>
      <Tab title={`Admin`} iconUrl={`/`} />
      <Tab title={`Dashboard`} active={true} />
      <Tab title={`Projects`} />
    </TabsStyles>
  )
}

export default Tabs