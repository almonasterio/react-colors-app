import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import NavBar from './Navbar'

class Palette extends Component {
    constructor(props){
        super(props);
        this.state={level:500,format: "hex"}
        this.changeLevel=this.changeLevel.bind(this)
        this.changeFormat=this.changeFormat.bind(this)
    }
    changeLevel(level){
        this.setState({level})
    }
    changeFormat(value) {
       this.setState({format:value})
    }
    
    render() {
        const {colors} = this.props.palette;
        const {level,format } = this.state;
        const colorBoxes = colors[level].map(c => <ColorBox background={c[format]} name={c.name}></ColorBox>)

        return (
            <div className="Palette">
            <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}></NavBar>
                <div div className = "Palette-colors" >
                    {colorBoxes}
               {/* A bunch of colors */}
                </div>
                {/* Footer */}
            </div>
        );
    }
}

export default Palette;