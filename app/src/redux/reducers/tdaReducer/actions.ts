import * as tdaActions from './actionTypes';

const addr = '127.0.0.1:8000'

export const getQuotes = (json: Object) => ({
  type: tdaActions.GET_QUOTES,
  payload: {
    keys: Object.keys(json),
    data: json
  }
});

export function fetchQuotes(symbolList: string[]) {
  return function (dispatch) {
    return fetch(`http://${addr}?Type=Quote&Symbols=${symbolList}`)
      .then(
        response => response.text(),
        error => console.log(error)
      )
      .then(
        text => dispatch(getQuotes(JSON.parse(String(text)))),
        error => console.log(error)
      )
      .catch(error => console.log(error))   
  }
}