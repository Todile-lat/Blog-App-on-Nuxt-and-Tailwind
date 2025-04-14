<template>
    <NuxtLink to="/" class="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition ml-6 mt-4">
      ← Home
</NuxtLink>
  <div class="max-w-2xl mx-auto p-4 ">
  
    <h1 class="text-2xl font-bold mb-4 text-blue-600">Create a New Post</h1>

    <form @submit.prevent="publishPost" class="space-y-4">
      <input
        v-model="newPost.title"
        placeholder="Post Title"
        class="border p-2 w-full"
      />

      <textarea
        v-model="newPost.info"
        placeholder="Post Content"
        class="border p-2 w-full"
        rows="6"
      ></textarea>
      <input
        v-model="newPost.author"
        placeholder="Author Name"
        class="border p-2 w-full"
        rows="6"
      ></input>
      <input
        v-model="newPost.category"
        placeholder="Post Category"
        class="border p-2 w-full"
        rows="6"
      ></input>

      <p >Upload an Image:</p>
      <input
        type="file"
        accept="image/*"
        @change="handleImageUpload"
        class="border p-2"
      />

     
      <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>
<br>
      <button
        type="submit"
        :disabled="!isFormValid"
        :class="{
          'bg-gray-400': !isFormValid,
          'bg-blue-600': isFormValid,
          'text-white': true,
          'cursor-not-allowed': !isFormValid
        }"
        class="px-4 py-2 rounded"
      >
        Publish Post
      </button>
    </form>
  </div>
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
import { usePostStore } from '@/stores/posts'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const postStore = usePostStore()
const router = useRouter()

const newPost = ref({
  title: '',
  info: '',
  image: '',
  author: '',
  category: '',
  time: '',
})

const errorMessage = ref('')


const isFormValid = computed(() => {
  return !!newPost.value.title && !!newPost.value.info && !!newPost.value.image
})

function publishPost() {
  if (!newPost.value.title || !newPost.value.info || !newPost.value.image) {
    errorMessage.value = 'Please fill in the field'
    return
  }

  postStore.addPost(newPost.value)
  errorMessage.value = ''
  router.push('/success')
}

function handleImageUpload(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      newPost.value.image = reader.result as string
    }
    reader.readAsDataURL(file)
  }
}


</script>