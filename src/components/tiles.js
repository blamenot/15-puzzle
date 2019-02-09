import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tile from './tile'
class Tiles extends Component {
    constructor(props) {
        super(props)
        this.getTile = this.getTile.bind(this)
    }
    /**
     * Inits Tile component for array element
     * @param {Number} number tp be displayed within the tile
     * @param {Number} position 0-15, is used to evaluate position on the Tiles board
     * @returns {Tile} Tile instance ready to display
     */
    getTile(number, index) {
        //Tile is clickable only if it has the 0 tile on top, below, right or left.  
        let isClickable = this.props.tiles[index - 1] === 0
                        ||this.props.tiles[index + 1] === 0
                        ||this.props.tiles[index - 4] === 0
                        ||this.props.tiles[index + 4] === 0
        return (<Tile key={number} number={number} index={index} clickable={isClickable}/>)
    }
    render() {
        return (
            <div className="tiles">
                {this.props.tiles.map(this.getTile)}
            </div>
        )
    }
}

function mapStateToPorps(state) {
    return {
        tiles: state
    };
}
export default connect(mapStateToPorps)(Tiles)