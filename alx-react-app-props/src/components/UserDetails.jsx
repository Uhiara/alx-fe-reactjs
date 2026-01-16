import UserContext from './UserContext';

function UserDetails({ userData }) {
    // Use the hook to access the context value
    const userData = useContext(UserContext);
    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;