import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'

export default class PaletteList extends Component {
    render() {
        const {palette} = this.props
        return (
            <div>
            <MiniPalette></MiniPalette>
                <h1>React Colors</h1>
                {palette.map(palette=><MiniPalette {...palette}></MiniPalette>)}
            </div>
        )
    }
}
