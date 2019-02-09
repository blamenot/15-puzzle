
import _ from 'underscore'
import {
    MOVE_TILE,
    UNDO_MOVE,
  } from '../constants/actionTypes'

const initialState = _.shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) 
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case MOVE_TILE: {
            //Create copy
            let updatedState = state.slice()
            //Exchange tile following tile elements 0 and at tileIndex
            updatedState[updatedState.indexOf(0)] = updatedState[action.tileIndex];
            updatedState[action.tileIndex] = 0;
            return updatedState;
        }
        case UNDO_MOVE:
            return state.slice()
        default:
            return state
    }
}
