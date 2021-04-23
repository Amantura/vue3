<template>
  <div>
    <div class="flex px-3 py-3 space-x-4 bg-white border-b">
      <div class="flex flex-col w-4/12 ">
        <span class="text-gray-400">
          ФИО
        </span>
        <span>
          {{ fullName }}
        </span>
      </div>
      <div class="flex flex-col w-4/12 ">
        <span class="text-gray-400">
          Телефон
        </span>
        <span>
          {{ item.phone }}
        </span>
      </div>
      <div class="flex flex-col items-end w-4/12 ">
        <span class="text-gray-400">
          Действии
        </span>
        <span>
          <button class="px-3 py-1 m-1 text-sm text-white bg-green-500 rounded-md" @click="view">
            Просмотр
          </button>
          <button class="px-3 py-1 m-1 text-sm text-white bg-red-600 rounded-md" @click="deleteItem">
            Удалить
          </button>
        </span>
      </div>
    </div>
    <AppClientDetail ref="view" />
  </div>
</template>


<script>
export default {
  props: {
    item: {
      type: Object,
      required:true
    },
    idx: {
      type: Number,
      required: true
    }
  },

  computed: {
    fullName() {
      return this.item.name + ' ' + this.item.firstName + ' ' + this.item.lastName
    }
  },

  methods: {
    deleteItem() {
      this.$store.commit('client/delete', this.idx)
    },
    view() {
      this.$refs.view.open(this.item)
    }
  }
}
</script>