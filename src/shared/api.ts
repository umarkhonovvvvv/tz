import axios from 'axios';
export const api = axios.create({ baseURL: 'http://localhost:4000' });
export interface Post { userId: number; id: number; title: string; body: string; }