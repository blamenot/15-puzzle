import React, { Component } from 'react'
import { connect } from 'react-redux'
import {undoMove, redoMove, reset} from '../actions/actions'
class Tools extends Component {
    render() {
        return (
            <div className='tool-box'>
                <button className="tool" disabled={!this.props.hasPast} onClick={this.props.onUndo}>☜</button>
                <button className="tool" disabled={!this.props.hasFuture} onClick={this.props.onRedo}>☞</button>
                <button className="tool" onClick={this.props.onReset}>&#x21bb;</button>
            </div>
        )
    }
}

function mapStateToPorps(state) {
    return {
        hasPast: state.past.length,
        hasFuture: state.future.length
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onUndo: () =>  dispatch(undoMove()),
        onRedo: () =>  dispatch(redoMove()),
        onReset: () => dispatch(reset())
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(Tools)