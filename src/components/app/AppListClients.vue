<template>
  <div class="py-10 ">
    <div v-if="loading" class="flex items-center justify-center">
      <div class="w-20 h-20 border-t-2 border-blue-500 rounded-full animate-spin">

      </div>
    </div>
    <div v-else>
      <div v-if="clients.length <= 0" class="text-center text-gray-400">
        Данные отсутствует
      </div>
      <AppClientCard
        v-for="(client, idx) in clients"
        :key="idx"
        :idx="idx"
        :item="client" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.client.loading
    },
    clients() {
      return this.$store.state.client.items
    }
  }
}
</script>