import { call, put, takeLatest } from "redux-saga/effects";
import { getAllProducts, getAllCategory } from '../../API';
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORIES } from "../constants";

function* getAllProductsSaga({payload}){
    try{
        const response = yield call(getAllProducts, payload);
        yield put({ type: `${GET_ALL_PRODUCTS}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_PRODUCTS}_FAILED`, payload: err })
    }
}

function* getAllCategoriesSaga({payload}){
    try{
        const response = yield call(getAllCategory, payload);
        yield put({ type: `${GET_ALL_CATEGORIES}_SUCCESS`, payload: response })
    }catch(err){
        yield put({ type: `${GET_ALL_CATEGORIES}_FAILED`, payload: err })
    }
}

export function* productsActionWatcher(){
    yield takeLatest(`${GET_ALL_PRODUCTS}_REQUEST`, getAllProductsSaga)
}

export function* categoryActionWatcher(){
    yield takeLatest(`${GET_ALL_CATEGORIES}_REQUEST`, getAllCategoriesSaga)
}
