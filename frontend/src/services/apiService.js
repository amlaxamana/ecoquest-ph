import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests if it exists
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const apiService = {
  // Destinations
  getDestinations: () => axiosInstance.get('/destinations'),
  getDestination: (id) => axiosInstance.get(`/destinations/${id}`),
  createDestination: (data) => axiosInstance.post('/destinations', data),

  // Challenges
  getChallenges: () => axiosInstance.get('/challenges'),
  getChallenge: (id) => axiosInstance.get(`/challenges/${id}`),
  submitChallengeResponse: (id, data) =>
    axiosInstance.post(`/challenges/${id}/respond`, data),

  // Quizzes
  getQuizzes: () => axiosInstance.get('/quizzes'),
  getQuiz: (id) => axiosInstance.get(`/quizzes/${id}`),
  submitQuizAnswer: (id, data) =>
    axiosInstance.post(`/quizzes/${id}/answer`, data),

  // Image Analysis
  analyzeImage: (formData) =>
    axiosInstance.post('/images/analyze', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  // EcoScore
  getEcoScore: (userId) => axiosInstance.get(`/users/${userId}/ecoscore`),
  getLeaderboard: (timeframe = 'all') =>
    axiosInstance.get(`/leaderboard?timeframe=${timeframe}`),

  // User Stats
  getUserStats: (userId) => axiosInstance.get(`/users/${userId}/stats`),

  // Auth
  login: (credentials) => axiosInstance.post('/auth/login', credentials),
  register: (userData) => axiosInstance.post('/auth/register', userData),
  logout: () => axiosInstance.post('/auth/logout'),
}

export default axiosInstance
