import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReduser} from "./dialogs-reduser";
import {profileReduser} from "./profile-reduser";
import {sidebarReduser} from "./sidebar-reduser";
import { usersReduser } from "./usersReduser";
import {authReduser} from "./auth-Reduser";
import thunkMiddleware  from 'redux-thunk';
import {reducer as formReduser} from 'redux-form'

type RedusersType = typeof redusers
export type AppStateType = ReturnType<typeof redusers>

declare global {
    interface Window {
      store?: any;
    }
  }

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
    usersPage:usersReduser,
    auth: authReduser,
    form: formReduser
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));



window.store = store;


export default store;
