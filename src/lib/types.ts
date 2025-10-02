export interface Technology { id?: number; name: string; icon?: string }
export interface Project { id?: number; title: string; description: string; image?: string; live_link?: string; github_link?: string; technologies?: Technology[] }

// ADDED: A type for the contact form payload
export interface ContactPayload { name: string; email: string; message: string }