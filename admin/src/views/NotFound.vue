<template>

   <div class="flex justify-center items-center min-h-full min-w-full">
       <div class="text-indigo-600 text-5xl px-8 font-bold border-r pb-8">404</div>
       <div class="px-8">
           <h1 class="text-5xl font-bold mb-2">Page Not Found</h1>
           <p class="text-gray-400 mb-8">Please check the url in address bar and try again</p>
           <div>
               <router-link :to="{name: 'app.dashboard'}"
                   class="py-2 px-4 rounded-md bg-indigo-600 text-sm font-semibold leading-6 text-white">
                   Go back home
               </router-link>
           </div>
       </div>


   </div>
</template>

<script setup>


</script>

<style scoped>

</style>
