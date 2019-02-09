import * as types from '../constants/actionTypes'

export const moveTile = tileIndex => ({type: types.MOVE_TILE, tileIndex})
export const undoMove = () => ({type: types.UNDO_MOVE})
export const redoMove = () => ({type: types.REDO_MOVE})
export const reset = () => ({type: types.RESET})