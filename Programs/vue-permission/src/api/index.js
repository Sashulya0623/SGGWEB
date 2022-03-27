import http from './axios'

export const login = data => {
    return http('/login', 'post', data)
  }