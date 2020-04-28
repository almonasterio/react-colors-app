import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './Palette.css'
class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(c => <ColorBox background={c.color} name={c.name}></ColorBox>)
     console.log(this.props.colors)
        return (
            <div className="Palette">
            {/* NavBar */}
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