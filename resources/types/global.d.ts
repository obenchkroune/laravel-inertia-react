import { Axios } from 'axios';

declare global {
    interface Window {
        axios: Axios;
        // add yout own
    }
}

export {};
