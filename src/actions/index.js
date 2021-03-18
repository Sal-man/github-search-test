export const SEARCH_USERS = "SEARCH_USERS";
export const SHOW_REPOS = "SHOW_REPOS";
export const ACTION_TYPE = "ACTION_TYPE";


export const searchUsers = (textText) => ({
  type: SEARCH_USERS,
  payload: textText,
});

export const getRepos = (repos) => ({
  type: SHOW_REPOS,
  payload: repos,
});

export const onActionChange = (type) => ({
  type: ACTION_TYPE,
  payload: type,
});
