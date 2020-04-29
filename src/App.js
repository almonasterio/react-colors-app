
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
    console.log(generatePalette(seedColors[4]))
    return (
      <Switch>
        <Route exact path='/' render={()=> <PaletteList palette={seedColors}></PaletteList>}/>
        <Route 
        exact 
        path='/palette/:id' 
        render={(routeProps)=><Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/>
       }/>
      </Switch>
      /* <div>
         <Palette palette={generatePalette(seedColors[4])}/>
      </div> */
    )
  }
}
