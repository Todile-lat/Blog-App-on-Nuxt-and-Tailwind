<template>

  <section>
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 class="text-4xl text-blue-800 font-bold">Logo</h1>
        <nav class=" hidden md:flex space-x-10">
          <a href="#" class="text-sm text-blue-300 font-medium">Menu</a>
          <a href="#" class="text-sm text-blue-300 font-medium">Menu</a>
          <a href="#" class="text-sm text-blue-300 font-medium">Menu</a>
          <a href="#" class="text-sm text-blue-300 font-medium">Menu</a>
        </nav>

      <div>
        <input
          type="text"
          class="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Search"
        />
      </div>

      </div>
    </header>
  </section>





  
  <section class="py-10 px-4 md:px-10 bg-white-50 mb-4">

      <NuxtLink to="/createPost" class="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        + Create New Post
      </NuxtLink>


      
      <h2 class="text-2xl font-bold mb-6 flex items-center justify-between mb-6 ">Featured Posts</h2>

      <button class="text-sm text-blue-300 mt-1" @click="navigateTo('/allPosts')"> More </button>
          
      <p v-if="!posts.length">No Posts Yet, Be the first to <NuxtLink to="/createPost" class="text-blue-400 underline">Create</NuxtLink>...</p>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        
        <NuxtLink :to="`/posts/${post.id}`"
          v-for="(post, index) in FeaturedPosts"
          :key="index"
          class="bg-white border rounded-lg shadow-sm hover:shadow transition"
        >
          <PostItem :post="post" />
        </NuxtLink>
      </div>
  </section>

  <div class="text-center mb-6">
    <div class="w-12 h-1 bg-blue-300 mx-auto mb-2 rounded"></div>
  </div>


  <section class="py-10 px-4 md:px-10 bg-white-50">

      <div class="flex gap-2">
          <h2 class="text-2xl font-bold mb-6 flex items-center justify-between mb-6" >
          Categories
        </h2>
        <button class="text-sm text-blue-300 mt-1"> More→</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        <div
          v-for="(post, index) in categories"
          :key="index"
          class="bg-white border rounded-lg shadow-sm hover:shadow transition"
        >
          <PostItem :post="post" />
        </div>
      </div>
    </section>
    
    
    <section  class="py-10 px-4 md:px-10 bg-black 500">
      <footer>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    
  
    <h1 class="text-4xl text-blue-800 font-bold">Logo</h1>

   
    </div>

    <nav class="text-sm space-x-10 text-gray-500 text-center">
      <a href="#" class="text-sm text-white-300 font-medium">Additional Link</a>
      <a href="#" class="text-sm text-white-300 font-medium">Additional Link</a>
      <a href="#" class="text-sm text-white-300 font-medium">Additional Link</a>
    </nav>

    <p class="text-sm text-gray-500 text-right">
      &copy; Your Company 2022. We Love You!
    </p>

      </footer>
    </section>
  </template>
  



  <script lang="ts" setup>

  import { usePostStore } from '@/stores/posts'
  const postStore = usePostStore()
  const {posts}  = storeToRefs(postStore) 

  const FeaturedPosts = computed(() =>
  posts.value
    .slice(0,3))


  // const posts = [
  //   {
  //     title: 'Post Title',
  //     author: 'Author',
  //     time: 'a min ago',
  //     image: 'main.jpg',
  //     info: 'Lorem',
  //     category: 'Category',
  //   },
  //   {
  //     title: 'Post Title',
  //     author: 'Author',
  //     time: 'a min ago',
  //     image: 'main.jpg',
  //      info: 'Lorem',
  //      category: 'Category',
  //   },
  //   {
  //     title: 'Post Title',
  //     author: 'Author',
  //     time: 'a min ago',
  //     image: 'main.jpg',
  //      info: 'Lorem',
  //      category: 'Category',
  //   },

  // ];

  const categories = [
    {
      title: 'Post Title 1',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
      info: 'Lorem',
      category: ['Category'],
    },
    {
      title: 'Post Title 2',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: ['Category'],
    },
    {
      title: 'Post Title 3',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: ['Category'],
    },

  ];

  const getImageUrl = (name: string) => {
    return new URL('../assets/img/' + name, import.meta.url).href
  }

  </script>