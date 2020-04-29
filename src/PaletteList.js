import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'
import {withStyles} from '@material-ui/styles'
const styles={
    root: {
        backgroundColor:"blue",
        height:"100vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"column",
        flexWrap:"wrap",
    },
    palettes:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"


    }, 
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white"
    }

    
}
class PaletteList extends Component {
    goToPalette(id){
        console.log("hola");
        this.props.history.push(`/palette/${id}`)

    }
    render() {
        const {palette,classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palette.map(palette=><MiniPalette {...palette} handleClick={()=>this.goToPalette(palette.id)}></MiniPalette>)}
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList)