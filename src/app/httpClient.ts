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
    return this.axiosInstance.post(endpoint, data);
  }

  public put<T>(endpoint: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put(endpoint, data);
  }

  public patch<T>(endpoint: string, data?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch(endpoint, data);
  }

  public delete<T>(endpoint: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete(endpoint);
  }
}

const httpClient = new HttpClient();

export default httpClient;
