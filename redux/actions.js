// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'

// action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addQuestion = newQuestion => ({
  type: UPDATE_QUESTION,
  payload: newQuestion,
})
