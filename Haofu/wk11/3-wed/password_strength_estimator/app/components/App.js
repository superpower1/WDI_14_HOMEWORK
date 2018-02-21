import React from 'react'
import PwdMeter from './PwdMeter'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <PwdMeter></PwdMeter>
      </div>
    )
  }
}
