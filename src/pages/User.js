import {Outlet} from "react-router-dom";


const User = () => {
    return (
        <div>
            <h1>User</h1>

            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default User;