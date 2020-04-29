import React, { Component } from 'react'
import ColorBox from './ColorBox'
import NavBar from './Navbar'
import PaletteFooter from './PaletteFooter'
import {Link} from 'react-router-dom'

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
        const {paletteName, emoji, id} = this.props.palette
        const colorBoxes=this._shades.map(color=> (
            <ColorBox key={color.name} name={color.name} background={color[format]}/>
        ))
        console.log(this.props.palette)
        return (
            <div div className = "SingleColorPalette Palette" >
             <NavBar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className={"Palette-colors"}>{colorBoxes}
                <div className="go-back ColorBox">
                <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
                </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}></PaletteFooter>
            </div>
        )
    }
}
