
import Palette from './Palette'
import seedColors from './seedColors';
import {generatePalette} from './colorHelpers'
import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import PaletteList from './PaletteList'

export default class App extends Component {

findPalette(id){
  return seedColors.find(function(palette){
    return palette.id === id
  })
}

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routeProps)=> <PaletteList palette={seedColors}{...routeProps}></PaletteList>}/>
        <Route 
        exact 
        path='/palette/:id' 
        render={(routeProps)=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
       }/>
       <Route exact path="/palette/:paletteId/:colorId" render={()=><h1>SINGLE COLOR PAGE</h1>}/> 
      </Switch>

    )
  }
}
