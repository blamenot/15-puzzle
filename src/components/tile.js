import React, { Component } from 'react'
import { connect } from 'react-redux'
import {moveTile} from '../actions/actions'
class Tile extends Component{
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    /**
     * Evalute cordinates for the tile
     * @returns {Object} Object containing left and top properties, values specified in %
     */
    getStyle() {
        return {
            left: (this.props.index % 4 * 25) + '%',
            top: (Math.trunc(this.props.index/4) * 25) + '%',
            cursor: this.props.clickable ? 'pointer' : 'default'
        }
    }
    /**
     * Click Handler
     */
    onClick() {
        //Move tile only if it has clickable prop
        if(this.props.clickable) {
            this.props.onMoveTile(this.props.index)
        }
    }
    render() {
        if(this.props.number)
            return(
                    <div onClick={this.onClick} className="tile" style={this.getStyle()}><span>{this.props.number}</span></div>
            )
        else
            return null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onMoveTile: tileIndex =>  dispatch(moveTile(tileIndex))
    }
}
export default connect(()=>{return {}}, mapDispatchToProps)(Tile)