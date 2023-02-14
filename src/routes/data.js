import Tables from '../components/tables/Tables';
import Dashboard from '../components/dashboard/Dashboard'
import Billing from '../components/billing/Billing'
import Notifications from '../components/notifications/Notifications'
import Profile from '../components/profile/Profile'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

const data = [
    {
        path : "/",
        element: Dashboard
    },
    {
        path: "/tables",
        element: Tables
    },
    {
        path: "/billing",
        element: Billing
    },
    {
        path: "/notifications",
        element: Notifications
    }, {
        path: "/profile",
        element: Profile
    },
    {
        path: "/Login",
        element: Login
    },
    {
        path: "/register",
        element: Register
    }
];

export default data