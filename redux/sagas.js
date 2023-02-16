import { call, put, takeEvery } from "redux-saga/effects"
import fetchCartItemApi from "../Fetch/api"
import { REQUEST_API_DATA } from "./constants"
import { receiveApiData } from "./actions"


function* fetchingItem() {
    try {
        const data = yield call(fetchCartItemApi)
        yield put(receiveApiData(data))
    } catch (error) {
        console.log(error)
    }
}


function* GetApiData() {
    yield takeEvery(REQUEST_API_DATA, fetchingItem)
}

export default GetApiData