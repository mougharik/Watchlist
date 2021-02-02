import * as tdaActions from './actionTypes';

interface State {
    allKeys: String[];
    byKey: Object;
}

const initialState: State = {
    allKeys: [],
    byKey: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case tdaActions.GET_QUOTES: {
            const { keys, data } = action.payload;
            return {
                ...state,
                allKeys: [...state.allKeys, ...keys],
                byKey: {...state.byKey, ...data}
            }
        }
    }
}