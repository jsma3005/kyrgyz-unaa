import { all } from 'redux-saga/effects';
import { newsActionWatcher } from './newsSaga'

export default function* root(){
    const tasks = [
        newsActionWatcher()
    ]

    yield all(tasks)
}