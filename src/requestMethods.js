import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2MyNjQ2ZDliNWM1OThkZGYyYWYzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjczOTA1MSwiZXhwIjoxNjUyOTk4MjUxfQ.lsckb815f7fIIw0ljxP7AaPmtOmMgIgzJHB_3a2kATk";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {
        token: `Bearer ${TOKEN}`,
    },
});
