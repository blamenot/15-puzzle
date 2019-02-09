import React, { Component } from 'react'
import { connect } from 'react-redux'
import {undoMove, redoMove, reset} from '../actions/actions'
class Tools extends Component {
    render() {
        return (
            <div className='tool-box'>
                <button disabled={!this.props.hasPast} onClick={this.props.onUndo}>Undo</button>&nbsp;
                <button disabled={!this.props.hasFuture} onClick={this.props.onRedo}>Redo</button>&nbsp;
                <button onClick={this.props.onReset}>Reset</button>&nbsp;
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