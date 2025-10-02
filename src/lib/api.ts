import axios from 'axios'
// UPDATED: Import both Project and the new ContactPayload types
import type { Project, ContactPayload } from './types'

export const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
export const api = axios.create({ baseURL: API_BASE || 'http://localhost:8000/api/v1', timeout: 15000 })

export async function fetchProjects(): Promise<Project[]> {
  try {
    // UPDATED: Using axios generics for better type safety
    const { data } = await api.get<Project[]>('/projects/')
    return data
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    // Re-throw the error to be caught by the component
    throw new Error('Could not connect to the server to fetch projects.')
  }
}

export async function postContact(payload: ContactPayload) {
  try {
    // UPDATED: Using axios generics for better type safety
    const { data } = await api.post('/contact/', payload)
    return data
  } catch (error) {
    console.error('Failed to post contact:', error)
    throw new Error('The message could not be sent. Please try again later.')
  }
}