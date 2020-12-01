import userTypes from './user.types';
import { auth, handleUserProfile } from './../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user 
});

export const signInUser = ({ email, password }) => async dispatch => {
    try {
       await auth.signInWithEmailAndPassword(email, password);
       dispatch({
           type: userTypes.SIGN_IN_SUCCESS,
           payload: true
       });

   } catch (error) {
       console.log(error)

   }
};

export const signUpUser = ({ displayName, email, password, confirmPassword }) => async dispatch => {
    if (password  < 8) {
        const err = ['Password should be at least 8 characters long']
        
    }
    if (password !== confirmPassword) {
        const err = ['Passwords Don\'t Match'];
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        return;
    }
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await handleUserProfile(user, { displayName });
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        });
        // reset();
        // props.history.push('/');

    } catch (error) {
        console.log(error);
    }
}