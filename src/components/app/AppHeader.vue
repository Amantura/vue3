<template>
  <div class="fixed inset-x-0 top-0 w-full bg-blue-500 shadow-md top-nav">
    <div class="flex items-center justify-between app-container top-nav">
      <div class="font-bold text-white">
        Vue + vite
      </div>


      <button class="flex items-center justify-center px-3 py-2 font-semibold text-white bg-white bg-opacity-25 rounded-2xl" @click="$refs.drawer.open()">
        + Добавить клиент
      </button>


    </div>
    <AppModal ref="drawer" />
  </div>
</template>