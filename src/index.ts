// User
export interface User {
  id: number
  email: string
  name: string
  status?: string
  phoneNumbers: string[]
}

export interface UserCreationRequest {
  email: string
  name: string
  phoneNumbers: string[]
}

export interface UserChangeOfStatusRequest {
  id: number
  status: UserStatus
}

export enum UserStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED'
}
