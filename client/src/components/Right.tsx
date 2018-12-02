import React, { Component } from 'react'
import OmniSearch from './OmniSearch'
import styled from 'styled-components'

import Dragbar from './Dragbar'

const Styles = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  height: 100vh;

  background-color: #fff;
  margin-left: 6px;

  .right-content-wrapper {
    font-size: 16px;
    color: #555;
  }

  .right-content-title {
    padding: 16px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: rgba(0,0,0,.3);
  }

  .right-content {
  }

  .last-login {
    padding: 32px 16px 16px 16px;
  }

  .quick-links {
  }

  .quick-link {
    padding: 6px 16px;
    color: #555;
    a { 
      color: #f25c54; 
    }

  }
`

interface RightProps { }
interface RightState {
  width: number;
}

class Right extends Component<RightProps, RightState> {
  constructor(props: RightProps) {
    super(props)
    this.state = {
      width: 300,
    }
    this.getDeltaFromChild = this.getDeltaFromChild.bind(this)
  }

  getDeltaFromChild(delta: number) {
    console.log('getDeltaFromChild!', delta)

    this.setState((prevState, props) => ({ width: prevState.width - delta }))

  }

  render() {
    return (
      <Styles>
        <h1>WIDTH: {this.state.width}</h1>
        <Dragbar onDrag={this.getDeltaFromChild} />
        <div>
          <OmniSearch />
          <div className='right-content-wrapper'>
            <div className='right-content-title'>
              Welcome, Andrew
            </div>

            <div className='right-content'>
              <div className='last-login'>
                Your last login was 8 days ago, on November 23rd.
              </div>

              <div className='quick-links'>
                <div className='quick-link'>Go to <a>all projects</a></div>
                <div className='quick-link'>Go to <a>your most recent project</a></div>
              </div>
            </div>

          </div>
        </div>
      </Styles>
    )
  }
}

export default Right
