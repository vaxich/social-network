import {combineReducers, createStore} from "redux";
import {dialogsReduser} from "./dialogs-reduser";
import {profileReduser} from "./profile-reduser";
import {sidebarReduser} from "./sidebar-reduser";
import { usersReduser } from "./usersReduser";

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
});
let store = createStore(redusers);

window.store = store;


export default store;
