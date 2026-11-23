import { request } from "./client";

export const getHealth = () => request<{ status: string }>("/health");
