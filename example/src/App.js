import React, { Component } from 'react'

import { Button, Icon, Spinner, Checkbox } from 'evact'

export default class App extends Component {
  render () {
    return (
        <div style={{padding: 100}}>
          <Checkbox labelStyle={{ color: 'red', fontSize: '90px'}} label="Check me " onChange={(...checked) => console.log(checked)} aria-label="bla"/><br />
          <Checkbox status="danger" label="Check me " onChange={(checked) => console.log(checked)}/><br />
          <Checkbox status="warning" label="Check me" indeterminate onChange={(checked) => console.log(checked)}/><br />
          <br />
          <Button status="warning" outline size="medium" isLoading>Success</Button><br />
          <br />
          <Button status="primary" icon="star" iconOnly/>
          <br />
          <br />
          <Button status="primary" outline size="medium" ghost icon="star" iconPlacement="left">Primary</Button><br />
          <br />
          <Button status="danger" outline size="medium" icon="star" iconPlacement="right">Danger</Button><br />
          <br />
          <Button status="success" outline size="medium" >Success</Button><br />
          <br />
          <Button status="info" outline size="medium" >Info</Button><br />
          <br />
          <Button status="warning" outline size="medium" >Warning</Button><br />
          <br />
          <Button status="outline" size="tiny" >Tiny</Button><br />
          <br />
          <Button status="danger" size="small">Error</Button><br />
          <br />
          <Button status="success" size="medium">Success</Button><br />
          <br />
          <Button status="info" size="large">Info</Button><br />
          <br />
          <Button status="warning" size="giant">Warning</Button><br />
          <br />
          <Button status="control" size="medium">Control</Button><br />
          <br />
          <Icon status="github" fill="red" onClick={(e) => console.log(e)}/><br />
          <Spinner /><br />
          <Spinner color="blue"/><br />
        </div>
    )
  }
}
