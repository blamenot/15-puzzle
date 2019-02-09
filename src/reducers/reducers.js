
import _ from 'underscore'
import {
    MOVE_TILE,
    UNDO_MOVE,
    REDO_MOVE
  } from '../constants/actionTypes'

const initialState = {
    past:[],
    present: _.shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),
    future: []
}
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case MOVE_TILE: {
            //preserve state
            state.past.push(state.present)
            //Create copy
            let updatedTilesState = state.present.slice()
            //Exchange tile following tile elements 0 and at tileIndex
            updatedTilesState[updatedTilesState.indexOf(0)] = updatedTilesState[action.tileIndex];
            updatedTilesState[action.tileIndex] = 0
            state.present = updatedTilesState;
            //future COLLAPSED!!!
            state.future = []
            //fresh state copy
            return Object.assign({}, state)
        }
        case UNDO_MOVE:
            if(state.past.length){
                state.future.push(state.present)
                state.present = state.past.pop()
                //fresh state copy
                return Object.assign({}, state)
            } else {
                return state
            }
        case REDO_MOVE:
            if(state.future.length){
                state.past.push(state.present)
                state.present = state.future.pop()
                //fresh state copy
                return Object.assign({}, state)
            } else {
                return state
            }
        default:
            return state
    }
}
