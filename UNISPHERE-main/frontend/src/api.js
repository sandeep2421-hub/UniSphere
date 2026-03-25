import axios from 'axios';
import { MOCK_DATA } from './mockData';

// Base URL - change this to your API in production
const API_BASE = "http://localhost:5001";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
});

// Flag to track if we're in demo mode
let isDemo = false;

// Initialize demo mode check
const checkDemoMode = async () => {
  if (isDemo) return true;
  
  try {
    await axios.get(`${API_BASE}/users`, { timeout: 2000 });
    return false;
  } catch (error) {
    isDemo = true;
    return true;
  }
};

// Wrapper to fetch with fallback to mock data
export const fetchWithFallback = async (endpoint, mockKey) => {
  const isDemoMode = await checkDemoMode();
  
  if (isDemoMode) {
    console.log(`[Demo Mode] Using mock data for: ${endpoint}`);
    return MOCK_DATA[mockKey] || [];
  }
  
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.log(`[API Error] ${endpoint} - falling back to mock data`);
    return MOCK_DATA[mockKey] || [];
  }
};

// Export wrapped axios methods
export default api;

