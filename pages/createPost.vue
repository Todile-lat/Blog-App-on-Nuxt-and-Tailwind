<template>
  <section class="py-10 px-4 md:px-10 bg-white-50">
    <h2 class="text-2xl font-bold mb-6 flex items-center justify-between">
      Create a Post
    </h2>

    <form @submit.prevent="submitPost" class="bg-white border rounded-lg shadow-sm p-6 space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Post Title</label>
        <input v-model="title" type="text" placeholder="Enter post title" class="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
        <input v-model="author" type="text" placeholder="Enter your name" class="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
      </div>

      

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Image Name</label>
        <input v-model="image" type="text" placeholder="e.g. post-image.jpg" class="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Post Content</label>
        <textarea v-model="info" rows="5" placeholder="Write your post content here..." class="w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
      </div>

      <div class="text-right">
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Publish Post
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// import { useBlogStore } from '@/stores/blogStore'
import { useRouter } from 'vue-router'

// const blogStore = useBlogStore()
const router = useRouter()

const title = ref('')
const author = ref('')
const image = ref('')
const info = ref('')

const submitPost = () => {
  const newPost = {
    title: title.value,
    author: author.value,
    image: image.value,
    info: info.value,
    time: 'Just now',
  }
  // blogStore.addPost(newPost)
  router.push('/')
}
</script>
