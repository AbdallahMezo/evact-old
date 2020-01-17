import React, { Component } from 'react'

import { Button, Icon, Spinner } from 'evact'

export default class App extends Component {
  render () {
    return (
        <div style={{padding: 100}}>
          <Button type="outline" size="tiny" >Tiny</Button><br />
          <br />
          <Button type="error" size="small">Error</Button><br />
          <br />
          <Button type="success" size="medium">Success</Button><br />
          <br />
          <Button type="info" size="large">Info</Button><br />
          <br />
          <Button type="warning" size="giant">Warning</Button><br />
          <br />
          <Button type="control" size="medium">Control</Button><br />
          <br />
          <Icon type="github" fill="red" onClick={(e) => console.log(e)}/><br />
          <Spinner /><br />
        </div>
    )
  }
}
