import React, { Component } from 'react'
import clickdrag from 'react-clickdrag'
import styled from 'styled-components'

interface DataDragType {
  isMouseDown: boolean;
  isMoving: boolean;
  mouseDownPositionX: number;
  mouseDownPositionY: number;
  moveDeltaX: number;
  moveDeltaY: number;
}

type DragbarProps = {
  onDrag: Function,
  dataDrag: DataDragType,
}

interface StateInterface {
  lastX: number;
  currentX: number;
}

class Dragbar extends Component<DragbarProps, StateInterface> {
  constructor(props: DragbarProps) {
    super(props)
    this.state = {
      lastX: 0,
      currentX: 0,
    }
  }

  componentWillReceiveProps(nextProps: DragbarProps) {
    console.log('DATADRAG:', nextProps.dataDrag.moveDeltaX)

    /// WROTE IT A DIFFERENT WAY, STILL KILLING MEEE
    function sendStateToParent<T extends object>(nextState: T, props: DragbarProps): any {
      return props.onDrag(nextState)
    }

    if (nextProps.dataDrag.isMoving) {
      this.setState((prevState: StateInterface) => ({
        currentX: prevState.lastX + nextProps.dataDrag.moveDeltaX,
      }),
        // (nextState, props) => this.props.onDrag(nextState)
      )
    }
    else {
      this.setState((prevState: StateInterface) => ({ lastX: prevState.currentX }))
    }
  }

  componentDidUpdate() {
    this.props.onDrag(this.state.currentX)
  }


  render() {
    return (
      <DragStyle />
    )
  }
}

const DragStyle = styled.div`
  background: #27ae60;
  width: 6px;
`



export default clickdrag(Dragbar)


