import axios from 'axios'


const baseURL = 'http://localhost:3001';

const service = axios.create({
    baseURL
    // withCredentials: true
})

const AUTH_SERVICE = {
    signup(userInfo) {
        return service.post('/api/signup', userInfo);
    }
}

export default AUTH_SERVICE;