import { ProductType } from "../pages/types/product";
import instance from "./instance";

export const dangky = (user) => {
    const url = `/register`;
    return instance.post(url,user);
}

export const login = (user) => {
    const url = `/login`;
    return instance.post(url,user);
}