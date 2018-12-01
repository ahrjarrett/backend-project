import React from 'react'
import styled from 'styled-components'


const TabsStyles = styled.div`
  display: flex;
  align-items: center;
  margin: 9px 60px 0 0;
  height: 100%;


  .tab {
    box-sizing: border-box;
    height: 43px;
    padding: 9px 16px 10px;
    margin-left: 10px;
    background-color: #0f202e;
    opacity: 0.5;
    border-bottom: 2px solid #172a3a;
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.6;
  }

  .tab:first-of-type {
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
      {props.title}
    </div>
  )
}

function Tabs() {
  return (
    <TabsStyles>
      <Tab title={`Admin`} iconUrl={`/`} />
      <Tab title={`Dashboard`} active={true} />
    </TabsStyles>
  )
}

export default Tabs