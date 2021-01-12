import { messageConstants } from '../../shared/constants';

export const messageActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: messageConstants.SUCCESS, message };
}

function error(message) {
    return { type: messageConstants.ERROR, message };
}

function clear() {
    return { type: messageConstants.CLEAR };
}