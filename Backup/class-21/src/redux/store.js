import { MessageReducer } from ".redux";
import {MessageReducer} from './Msg/Message.reducer'
import { compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";

let store = createStore(MessageReducer, composeWithDevTools)
export {store}