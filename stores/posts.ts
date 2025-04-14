import { defineStore } from 'pinia'

interface Post { title: string; info: string; image: string; category: string; time: string; author: string  }

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
  }),
  actions: {
    addPost(post: Post) {
      this.posts.unshift(post)
    }
  }
})
