import { useEffect} from 'react';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useAuth = props => {
    const { currentUser } = useSelector(mapState);
    useEffect(() => {
        if (!currentUser){
            props.history.push('/Login');
        }
    }, [currentUser]);

    return currentUser;
}

export default useAuth;