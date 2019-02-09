import React, { Component } from 'react'

export default class Tile extends Component{
    /**
     * Evalute cordinates for the tile
     * @returns {Object} Object containing left and top properties, values specified in %
     */
    getStyle() {
        return {
            left: (this.props.position % 4 * 25) + '%',
            top: (Math.trunc(this.props.position/4) * 25) + '%'
        }
    }
    render() {
        if(this.props.number)
            return(
                    <div className="tile" style={this.getStyle()}><span>{this.props.number}</span></div>
            )
        else
            return null
    }
}