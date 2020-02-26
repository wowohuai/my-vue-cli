import get from './http';

export const getHome = (params) => get('/api/mock/index', params);

export const getCities = (params) => get('/api/mock/city', params);

export const getDetails = (params) => get('/api/mock/detail', params);
