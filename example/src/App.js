import React, { Component } from 'react'

import { Button, Icon, Spinner, Checkbox, TextInput } from 'evact'

export default class App extends Component {
  render () {
    return (
        <div style={{padding: 100}}>
        <div style={{width: 200}}>
          <TextInput
            label="username"
            status="info"
            placeholder="Please Enter your name"
            icon="star"
            aria-label="text"
            aria-describedby="bla"
          />
        </div>
        <br />
        <TextInput status="info" placeholder="Please Enter your name" value="I am abdallah" icon="star"/>
        <br />
          <br />
          <TextInput status="info" placeholder="Please Enter your name" disabled value="I am abdallah"/>
          <br />
          <br />
          <TextInput status="success" value="controlled value" isClearable placeholder="Success Input" aria-label="hello world"/>
          <br />
          <br />
          <TextInput status="danger" width={150} className="className" onChange={value => console.log(value)}/>
          <br />
          <br />
          <TextInput status="warning" size="giant" fullWidth/>

          <br/>
          <br/>
          <Checkbox labelStyle={{ color: 'red', }} label="Check me " onChange={(...checked) => console.log(checked)} aria-label="bla"/><br />
          <Checkbox status="danger" label="Check me " onChange={(checked) => console.log(checked)}/><br />
          <Checkbox status="warning" label="Check me" disabled checked onChange={(...checked) => console.log(checked)}/><br />
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
