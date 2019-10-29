import { ENABLE_DRAG, DISABLE_DRAG } from './actionTypes';

export const enableDrag = (item) => ({
    type: ENABLE_DRAG,
    item,
});

export const disableDrag = () => ({
    type: DISABLE_DRAG,
});
