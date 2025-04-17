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
  <section>
    <div class="max-w-3xl mx-auto px-4 py-10">
      <NuxtLink to="/" class="text-blue-500 mb-4 inline-block">← Back to Home</NuxtLink>
  
      <div v-if="post">
          <h1 class="text-3xl font-bold text-black-800 mb-2">{{ post.title }}</h1>
          <p class="text-blue-500 mb-4">
          {{ post.author }} | {{ post.category }} | <p class="text-gray-500 mb-4" >{{ post.time }}</p>
        </p>
        <div class="h-[250px]">
            <img :src="post.image" class="w-full h-full object-fit rounded mb-6">
        </div>
        <p class="text-lg text-gray-700 leading-relaxed w-full">{{ post.info }}</p>
        <div class="text-center mb-6">

</div>
    </div>
      <p v-else class="text-red-500">Post not found.</p>
    </div>
</section>

<section>
    <p class="text-2xl font-bold text-grey-500 mx-5">Share This</p>

    <p class="text-base text-grey-500 mx-5 mt-10">More Posts</p>

      <div v-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        <NuxtLink :to="`/posts/${post.id}`"
          v-for="(post, index) in FeaturedPosts"
          :key="index"
          class="bg-white border rounded-lg shadow-sm hover:shadow transition"
        >
         <div class="h-[150px]">
          <img :src="post.image" alt="Post image" class="w-full h-full object-fit rounded-t-lg">
         </div>
          <div class="p-4 space-y-5">
            <h3 class="text-lg font-semibold flex align-center justify-between">
             <span>{{ post.title }}</span>
            </h3>
            <h2 class="text-lg font-semibold flex align-center ">
          </h2>
         
          </div>
        </NuxtLink>
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
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { usePostStore } from '@/stores/posts'
  import { storeToRefs } from 'pinia'
  
  const route = useRoute()
  const postStore = usePostStore()
  const { posts } = storeToRefs(postStore)
  
  const postId = route.params.id as string
  const post = computed(() =>
  posts.value.filter((post) => post.id === parseInt(postId))[0] || {})

  const FeaturedPosts = computed(() =>
  posts.value
    .slice(0,3))
  
  </script>

  