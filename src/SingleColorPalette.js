import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './Navbar'
import PaletteFooter from './PaletteFooter'

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades =this.gatherShades(this.props.palette,this.props.colorId)
        this.state = {format: "hex"}
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeFormat(value) {
       this.setState({format:value})
    }

    gatherShades(palette,colorToFilterBy){
        let shades=[];
        let allColors=palette.colors;
        for(let key in allColors){
            shades=shades.concat(allColors[key].filter(color =>color.id===colorToFilterBy ))
        }
        return shades.slice(1)
    }
    render() {
        const {format} = this.state;
        const {paletteName, emoji} = this.props.palette
        const colorBoxes=this._shades.map(color=> (
            <ColorBox key={color.id} name={color.name} background={color[format]}/>
        ))
        return (
            <div className="Palette">
             <NavBar handleChange={this.changeFormat} showingAllColors={false}/>
                <h1>SINGLE COLOR PAGE</h1>
                <div className={"Palette-colors"}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}></PaletteFooter>
            </div>
        )
    }
}
