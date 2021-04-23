<template>
  <div class="flex justify-center">
    <transition
      enter-active-class="transition-all duration-200 transform easi-out-in"
      leave-active-class="transition-all duration-200 transform easi-out-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="visible" class="fixed inset-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-25" @click.self="visible = false">
      </div>
    </transition>
    <transition
      enter-active-class="transition-all duration-200 transform easi-out-in"
      leave-active-class="transition-all duration-200 transform easi-out-in"
      enter-from-class="translate-x-full"
      leave-to-class="translate-x-full"
    >
      <div v-if="visible" class="fixed top-0 right-0 w-full h-screen p-4 overflow-x-hidden overflow-y-scroll bg-white rounded-md scroll md:w-96">
        <AppClientCreateForm @close="close" />
      </div>

    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false
  }),

  methods: {
    open() {
      this.visible = true
    },

    close() {
      this.visible = false
    }
  }
}
</script>