import { AxiosResponse } from 'axios';
import {
  serviceWithToken,
  serviceWithoutToken
} from "./httpClient";

/** Service With Token */
export const apiGetWithToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithToken().get(url, {
    params: params
  });
};

export const apiPostWithToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithToken().post(url, params)
};

export const apiPatchWithToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithToken().patch(url, params);
};

export const apiPutWithToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithToken().put(url, params);
};

export const apiDeleteWithToken = (url: string): Promise<AxiosResponse> => {
  return serviceWithToken().delete(url);
};

/** Service Without Token */
export const apiGetWithoutToken = (url: string, params: any = null): Promise<AxiosResponse> => {
  return serviceWithoutToken().get(url, {
    params: params
  });
};

export const apiPostWithoutToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithoutToken().post(url, params);
};

export const apiPatchWithoutToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithoutToken().patch(url, params);
};

export const apiPutWithoutToken = (url: string, params: any): Promise<AxiosResponse> => {
  return serviceWithoutToken().put(url, params);
};

export const apiDeleteWithoutToken = (url: string): Promise<AxiosResponse> => {
  return serviceWithoutToken().delete(url);
};
