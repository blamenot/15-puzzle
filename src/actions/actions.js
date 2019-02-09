import * as types from '../constants/actionTypes'

export const moveTile = tileIndex => ({type: types.MOVE_TILE, tileIndex})
export const undoMove = () => ({type: types.UNDO_MOVE})