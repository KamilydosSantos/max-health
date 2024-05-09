import axios, { AxiosInstance } from "axios";

interface ApiService {
    get<T>(endpoint: string): Promise<T>;
    post<T>(endpoint: string, body: any): Promise<T>;
    delete<T>(endpoint: string): Promise<T>;
    put<T>(endpoint: string, body: any): Promise<T>;
}

class ApiServiceImplementation implements ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://max-health-api.vercel.app"
        });
    }

    async get<T>(endpoint: string): Promise<T> {
        const response = await this.axiosInstance.get<T>(endpoint);
        return response.data;
    }

    async post<T>(endpoint: string, body: any): Promise<T> {
        const response = await this.axiosInstance.post<T>(endpoint, body);
        return response.data;
    }

    async delete<T>(endpoint: string): Promise<T> {
        const response = await this.axiosInstance.delete<T>(endpoint);
        return response.data;
    }

    async put<T>(endpoint: string, body: any): Promise<T> {
        const response = await this.axiosInstance.put<T>(endpoint, body);
        return response.data;
    }
}

export const api: ApiService = new ApiServiceImplementation();