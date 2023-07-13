import axios from 'axios';

const BASE_URL = '/api';
const GEON_URL = '/geon-api';

export default axios.create({
    baseURL: "/api",
    timeout: 4000,
    headers: { 'Content-Type': 'application/json' },
});

