import * as action from "../content/content"
export const playGameAction = () => {
    return {
        type: action.PLAY_GAME
    }
}
export const datCuocAction = (quanCuoc) => {
    return {
        type: action.DAT_CUOC,
        quanCuoc
    }
}
