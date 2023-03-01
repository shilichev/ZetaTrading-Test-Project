import axios from 'axios';

import type { AxiosInstance, AxiosResponse } from 'axios';

class HttpClient {
  private axiosInstance: AxiosInstance;

  public constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://test.vmarmysh.com/',
    });
  }

  public get<T>(endpoint: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get(endpoint, { params: data });
  }

  public post<T>(endpoint: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post(endpoint, null, { params: data });
  }
}

const httpClient = new HttpClient();

export default httpClient;
