import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 定义业务响应类型
export interface ApiResponse<T = any> {
  ret: number;
  err: string | null;
  data: T;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, timeout: 10000, headers: { 'Content-Type': 'application/json' }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status, data } = error.response;
    if (error.response) {

      // 处理业务错误
      if (data?.ret !== undefined) {
        console.error(`Business Error (${data.ret}): ${data.err}`);
        return Promise.reject(data);
      }

      // 处理 HTTP 错误
      switch (status) {
        case 401:
          window.location.href = '/login';
          break;
        case 403:
          console.error('Forbidden');
          break;
        default:
          console.error('Server Error');
      }
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);


// 封装请求方法（核心解决方案）
export const http = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    const response = await instance.get<ApiResponse<T>>(url, config);
    return response.data; // 直接返回业务数据
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
    const response = await instance.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }
};

export default http;
