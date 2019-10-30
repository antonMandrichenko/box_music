import firebase from 'firebase';

export const updateEmail = (email) => {
	return {type: 'UPDATE_EMAIL', payload: email}
}

export const updatePassword = (password) => {
	return {type: 'UPDATE_PASSWORD', payload: password}
}

export const loginAction = () => {
  return async (dispatch, getState) => {
    try {
      const { email, password } = getState().user
      console.log(email, password)
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(response)
    } catch (e) {
      alert(e)
    }
  }
}
