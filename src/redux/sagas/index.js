import { all } from 'redux-saga/effects';
import { newsActionWatcher, singleNewsActionWatcher } from './newsSaga';
import { productsActionWatcher, categoryActionWatcher } from './productsSaga'

export default function* root(){
    const tasks = [
        newsActionWatcher(),
        singleNewsActionWatcher(),
        productsActionWatcher(),
        categoryActionWatcher()
    ]

    yield all(tasks)
}