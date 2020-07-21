export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

/* 
    0 = nothing, each tetromino will have a letter in that particular cell
    clear => merge when a tetrominos colides on the stage.
*/