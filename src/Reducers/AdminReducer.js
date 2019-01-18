import * as users from './admin'
const AdminReducer = (state = "", action) => {
    switch(action.type) {
        case  "LOG_IN" :
        return( action.userProfile.email === users.admin.email ? "admin" : "user")
        case "LOG_OUT" : 
        return ""
        default : 
        return state
    }
}

export default AdminReducer