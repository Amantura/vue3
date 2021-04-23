<template>
  <div v-if="item" class="fixed inset-x-0 top-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-25" @click.self="close">
    <div class="w-full px-4 py-3 bg-white rounded-md md:w-96">
      <div class="space-x-2">
        <span class="text-gray-400">Имя:</span>
        <span>{{ item.name }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Фамилия:</span>
        <span>{{ item.firstName }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Отчество:</span>
        <span>{{ item.lastName }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Номер телефона:</span>
        <span>{{ item.phone }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Пол:</span>
        <span>{{ item.pol }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Менеджер:</span>
        <span>{{ item.manager }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Город:</span>
        <span>{{ item.city }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">Группа:</span>
        <span>{{ item.group }}</span>
      </div>
      <div class="space-x-2">
        <span class="text-gray-400">SMS:</span>
        <span>{{ item.sms ? 'Отправить': 'Не отправить' }}</span>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    item: undefined
  }),
  methods: {
    open(item) {
      this.item = item
    },
    close() {
      this.item = undefined
    }
  }
}
</script>