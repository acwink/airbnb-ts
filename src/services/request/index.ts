import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class WKRequest {
  instance: AxiosInstance;
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }

  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }
}

export default new WKRequest(BASE_URL, TIMEOUT);
