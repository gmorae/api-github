import request from './api.service';

export const getData = user => request.get(user)