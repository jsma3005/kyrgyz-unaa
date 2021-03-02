import { call, put, takeLatest } from "redux-saga/effects";
import { getAllNews } from '../../API';
import { GET_ALL_NEWS } from "../constants";

function* getAllNewsSaga({payload}){
    try{
        const response = yield call(getAllNews, payload);
        yield put({ type: `${GET_ALL_NEWS}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_NEWS}_FAILED`, payload: err })
    }
}

export function* newsActionWatcher(){
    yield takeLatest(`${GET_ALL_NEWS}_REQUEST`, getAllNewsSaga)
}