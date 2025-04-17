import { defineStore } from 'pinia'

interface Commment {
  id: number,
  postId: number,
  name: string
  message: string
}
interface Post 
{ 
  id: number; 
  title: string; 
  info: string; 
  image: string; 
  category: string[]; 
  time: string; 
  author: string;
}

export const usePostStore = defineStore('postStore', () =>{
  const posts: Ref<Post[]> = ref([])
  const comments: Ref<Comment[]> = ref([])

  const addPost = (post: Post)    => {
    const newPost ={
     ...post, id: !posts.value.length ? 1 : posts.value.length + 1    
    }
    posts.value.unshift(newPost)
  }
  
  return {
    posts,
    addPost,
  }
})

