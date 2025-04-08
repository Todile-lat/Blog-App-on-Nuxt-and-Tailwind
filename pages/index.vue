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


    <section class="py-10 px-4 md:px-10 bg-white-50">
      <h2 class="text-2xl font-bold mb-6 flex items-center justify-between mb-6 ">Featured Posts
        <button class="text-sm text-blue-300 mt-1" > More→</button>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="bg-white border rounded-lg shadow-sm hover:shadow transition"
        >
         <div class="h-70">
          <img :src="getImageUrl(post.image)" alt="Post image" class="w-full h-full rounded-t-lg">
         </div>
          <div class="p-4 space-y-5">
            <h3 class="text-lg font-semibold flex align-center justify-between">
            <span>{{ post.title }}</span>

            <span class="text-sm text-blue-600 mt-1"> {{ post.category }}</span>
            </h3>
            <h2 class="text-lg font-semibold flex align-center ">
            <p class="text-sm text-blue-300 mt-1">{{ post.author }}</p>
            <p class="text-sm text-blue-300 mt-1 pl-4 text-gray-300" >{{ post.time }}</p>
          </h2>
            <p class="text-sm text-gray-600 mt-1">{{ post.info }}</p>
          </div>
        </div>
      </div>
    </section>
<br>
<br>
<br>
    <div class="text-center mb-6">
  <div class="w-12 h-1 bg-blue-300 mx-auto mb-2 rounded"></div>
</div>


    <section class="py-10 px-4 md:px-10 bg-white-50">

      <h2 class="text-2xl font-bold mb-6 flex items-center justify-between mb-6" >
        Categories
        <button class="text-sm text-blue-300 mt-1"> More→</button>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="bg-white border rounded-lg shadow-sm hover:shadow transition"
        >
         <div class="h-70">
          <img :src="getImageUrl(category.image)" alt="Post image" class="w-full h-full rounded-t-lg">
         </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold flex align-center justify-between">
            <span>{{ category.title }}</span>

            <span class="text-sm text-blue-600 mt-1"> {{ category.category }}</span>
            </h3>
            <h2 class="text-lg font-semibold flex align-center ">
            <p class="text-sm text-blue-300 mt-1">{{ category.author }}</p>
            <p class="text-sm text-blue-300 mt-1 pl-4 text-gray-300" >{{ category.time }}</p>
          </h2>
            <p class="text-sm text-gray-600 mt-1">{{ category.info }}</p>
          </div>
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
  



  <script setup>
  const posts = [
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
      info: 'Lorem',
      category: 'Category',
    },
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: 'Category',
    },
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: 'Category',
    },

  ];

  const categories = [
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
      info: 'Lorem',
      category: 'Category',
    },
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: 'Category',
    },
    {
      title: 'Post Title',
      author: 'Author',
      time: 'a min ago',
      image: 'main.jpg',
       info: 'Lorem',
       category: 'Category',
    },

  ];

  const getImageUrl = (name) => {
    return new URL('../assets/img/' + name, import.meta.url).href
  }

  </script>