import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

class Palette extends Component {
    constructor(props){
        super(props);
        this.state={level:500}
        this.changeLevel=this.changeLevel.bind(this)
    }
    changeLevel(level){
        this.setState({level})
    }
    
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(c => <ColorBox background={c.hex} name={c.name}></ColorBox>)

        return (
            <div className="Palette">
            {/* NavBar */}
            <Slider defaultValue={level} min={100} max={900} onAfterChange={this.changeLevel} step={100}/>
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