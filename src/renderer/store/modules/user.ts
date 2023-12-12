import { store } from '../index'
import { defineStore } from 'pinia'

interface UserType {
  username: string
  description: string
}

interface UserState {
  userInfo?: UserType
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      userInfo: {
        username: 'dylan',
        description: 'this is a description about author!'
      }
    }
  },
  getters: {
    getUserInfo(): UserType | undefined {
      return this.userInfo
    }
  },
  actions: {
    setUserInfo(userInfo?: UserType) {
      this.userInfo = userInfo
    }
  },
  persist: true
})


export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
