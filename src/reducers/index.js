import { SEARCH_USERS, getRepos, SHOW_REPOS, ACTION_TYPE } from "../actions"

const initialState = {
  repos: [],
  type: 'users',
  searchText: ''
}

export const gitHubReducer = (state = initialState, action) => {
  switch(action.type){
    case SEARCH_USERS: {
      return {...state, searchText: action.payload}
    }
    case SHOW_REPOS: {
      return {...state, repos: action.payload}
    }
    case ACTION_TYPE: {
      return {...state, type: action.payload}
    }
    default:
      return state
  }
}

export const loadRepos = () => async (dispatch, getState) => {
  const searchtext = getState().searchText;
  const type = getState().type;
  if (searchtext && type) {
    var url = new URL(`https://api.github.com/search/${type}`)
    var params = {q:searchtext}
    url.search = new URLSearchParams(params).toString();
    const result = await fetch(url).then(res => res.json()).catch((error) => console.log(error) /* We acn show some toaster here in case of error*/ );
    dispatch(getRepos(result.items))
  }
  
} 