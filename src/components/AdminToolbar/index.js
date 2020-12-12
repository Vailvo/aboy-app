import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from './../../Utils';
import './styles.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


const AdminToolbar = props => {
    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if(!isAdmin) return null;

    return (
        <div className="adminToolbar">
            <div className="title">
                <Link to="/Admin"> My Admin Toolbar </Link>
            </div>
        </div>
    );
}

export default AdminToolbar;