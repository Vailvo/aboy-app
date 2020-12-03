import userTypes from './user.types';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils'

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user 
});

export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})

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
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        
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
        

    } catch (error) {
        console.log(error);
    }
}
export const resetPassword = ({ email }) => async dispatch => {
    const config = {
        url: 'http://localhost:3000/Login'
    } 
    
    try {

            
            await auth.sendPasswordResetEmail( email, config )
            .then(() => {
                dispatch({
                    type: userTypes.RESET_PASSWORD_SUCCESS,
                    payload: true
                });
               
            })
            .catch(() => {
                const err = ['Email not found. Please try again.'];
                dispatch({
                    type: userTypes.RESET_PASSWORD_ERROR,
                    payload: err
                })
                
            })
        } catch (error) {
            console.log(error);
        }
};

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
        .then(() => {
            dispatch({
                type: userTypes.SIGN_IN_SUCCESS,
                payload: true
            });
        })
    } catch (err) {
        console.log(err);
    }
    
};