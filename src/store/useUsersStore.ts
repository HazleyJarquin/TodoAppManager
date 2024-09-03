import { IUsersResponse } from '@/types/IUsersResponse'
import { createWithEqualityFn } from 'zustand/traditional'

type UsersSate = {
  users: IUsersResponse[]
  setUsers: (users: IUsersResponse[]) => void
}

export const useUsersStore = createWithEqualityFn<UsersSate>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}))
