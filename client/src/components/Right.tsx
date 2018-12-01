import React from 'react'
import OmniSearch from './OmniSearch'
import styled from 'styled-components'

const Styles = styled.div`
  width: 300px;
  background-color: #fff;
  border-left: 6px solid #27ae60;
  margin-left: 6px;
  padding-bottom: 60%;

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

function Right() {
  return (
    <Styles>
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
    </Styles>
  )
}

export default Right
