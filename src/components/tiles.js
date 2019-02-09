import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tile from './tile'
class Tiles extends Component {
    /**
     * 
     * @param {Number} number tp be displayd within the tile
     * @param {Number} position 0-15, is used to evaluate position on the Tiles board
     * @returns {Tile} Tile instance ready to display
     */
    getTile(number, position) {
        return (<Tile key={number} number={number} position={position}/>)
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