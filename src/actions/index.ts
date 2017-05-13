import Action from './action';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Store } from '../store';

export const GET_POSTS = 'GET_POSTS';
const POSTS_API_URL = 'http://localhost:5000/api/values/';

export function getPosts() : Action<any> {
    console.log("in action");
    const request = axios.get(POSTS_API_URL);

    return {
        type: GET_POSTS,
        payload: request
    };
}