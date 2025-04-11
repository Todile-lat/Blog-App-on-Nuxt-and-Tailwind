import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [] as { title: string; content: string; image: string }[],
  }),
  actions: {
    addPost(post: { title: string; content: string; image: string }) {
      this.posts.push(post)
    }
  }
})
