import { messageConstants } from '../../shared/constants';

export function message(state = {}, action) {
    switch (action.type) {
        case messageConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case messageConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case messageConstants.CLEAR:
            return {};
        default:
            return state
    }
}