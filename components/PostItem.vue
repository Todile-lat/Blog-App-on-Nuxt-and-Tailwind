<script setup lang="ts">
  interface Post {
    title: string
    category?: string[],
    image: string,
    author?: string,
    info?: string,
    time?: string
  }

  interface Props {
    post: Post
  }

  const { post } = defineProps<Props>()
</script>
<template>
  <div class="h-[250px]">
          <img :src="post.image" alt="Post image" class="w-full h-full object-fit rounded-t-lg">
          </div>
          <div class="p-4 space-y-5">



            <div class="flex justify-between">
              <h3 class="text-lg font-semibold flex align-center justify-between">
                {{ post.title }}
              </h3>
              <div class="flex gap-1">
                <button v-for="(category, index) in post.category" :key="index" class="bg-gray-400 text-xs text-white rounded-md px-2 py-1 text-nowrap">{{ category }}</button>
              </div>
            </div>



            <h2 class="text-lg font-semibold flex align-center ">
            <p class="text-sm text-blue-300 mt-1">{{ post.author }}</p>
            <p class="text-sm text-blue-300 mt-1 pl-4 text-gray-300" >{{ post.time }}</p>
          </h2>
            <p class="text-sm text-gray-600 mt-1">{{ post.info?.slice(0, 20) }}</p>
          </div>
</template>