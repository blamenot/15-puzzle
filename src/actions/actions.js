import * as types from '../constants/ActionTypes'

export const moveTile = tile => ({type: types.MOVE_TILE, tile})
export const undoMove = () => ({type: types.UNDO_MOVE})