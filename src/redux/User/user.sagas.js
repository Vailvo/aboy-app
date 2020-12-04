import { takeLatest, call, all, put } from 'redux-saga/effects';
import { auth, handleUserProfile,getCurrentUser, GoogleProvider } from './../../firebase/utils';
import userTypes from './user.types';
import { signInSuccess, signOutUserSuccess, userError } from './user.actions';

export function* getSnapshotFromUserAuth(user) {
    try {

        const userRef = yield call(handleUserProfile, { userAuth: user });
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()

            })
        );

    } catch (error) {
        console.log(error);
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)


        // dispatch({
        //     type: userTypes.SIGN_IN_SUCCESS,
        //     payload: true
        // });

    } catch (error) {
        console.log(error)

    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        console.log(error)
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    yield auth.signOut();
    yield put(
        signOutUserSuccess()
    )
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmPassword
}}) {
    if (password  < 8) {
        const err = ['Password should be at least 8 characters long'];
        yield put(
            userError(err)
        )
       
    }
    if (password !== confirmPassword) {
        const err = ['Passwords Don\'t Match'];
        yield put(
            userError(err)
        )
        
    }
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield call(handleUserProfile, {userAuth: user, additionalData: {displayName}});
        
        

    } catch (error) {
        console.log(error);
    }
}

export function* onSignUpUserStart() {
    takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutUserStart),
        call(onSignUpUserStart)
    ])
}