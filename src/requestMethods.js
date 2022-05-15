import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2MyNjQ2ZDliNWM1OThkZGYyYWYzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjU4OTA1MywiZXhwIjoxNjUyODQ4MjUzfQ.IRQNp-3hA0Ws6IRvk7eJy3ozuLR8t6G8nbgrlqkJ-Mc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`,
    },
});
