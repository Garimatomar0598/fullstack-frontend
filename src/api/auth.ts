import { API_URL } from "@/lib/constants"

interface SignupData {
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  user: {
    id: string
    email: string
  }
}

interface UserResponse {
  id: string
  email: string
}

export async function signupUser(data: SignupData): Promise<UserResponse> {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Failed to create account")
  }

  return response.json()
}

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || "Invalid credentials")
  }

  return response.json()
}

export async function getCurrentUser(): Promise<UserResponse> {
  const token = localStorage.getItem("token")

  if (!token) {
    throw new Error("Not authenticated")
  }

  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }

  return response.json()
}

export async function logoutUser(): Promise<void> {
  const token = localStorage.getItem("token")

  if (!token) {
    return
  }

  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })

  localStorage.removeItem("token")
}