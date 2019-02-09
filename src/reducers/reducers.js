import _ from 'underscore'
import {
    MOVE_TILE,
    UNDO_MOVE,
    REDO_MOVE,
    RESET
  } from '../constants/actionTypes'

/**
 * Default state with shuffled tiles
 * @returns {Object} default state
 */
function getDefaultState() {
    return {
        past:[],
        present: _.shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),
        future: []
    }
}
/**
 * Saves state to local storage;
 * @param {Object} state Current redux state
 */
function saveState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
}
/**
 * Tries to parse state from local storage if unavalable returns default
 * @returns {Object} restored or default state
 */
function getState() {
    let state
    try {
        state = localStorage.getItem('state') 
            &&  JSON.parse(localStorage.getItem('state'))
    } catch (e) {
        console.error(e)
        localStorage.removeItem('state')
    }

    return state || getDefaultState()
}
export default function reducer (state = getState(), action) {
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
            //save
            saveState(state);
            //fresh state copy
            return Object.assign({}, state)
        }
        case UNDO_MOVE:
            if(state.past.length){
                state.future.push(state.present)
                state.present = state.past.pop()
                //save
                saveState(state);
                //fresh state copy
                return Object.assign({}, state)
            } else {
                return state
            }
        case REDO_MOVE:
            if(state.future.length){
                state.past.push(state.present)
                state.present = state.future.pop()
                //save
                saveState(state)
                //fresh state copy
                return Object.assign({}, state)
            } else {
                return state
            }
        case RESET: {
            //clear current state
            let state = getDefaultState()
            //save new cleared state
            console.dir(state)
            saveState(state)
            return state
        }
        default:
            return state
    }
}
