<template>
  <div>
    <form class="space-y-3 " @submit.prevent="submit">
      <div class="flex items-center justify-between w-full pt-2 ">
        <h2 class="text-xl font-semibold">
          Добавить клиент
        </h2>
        <button class="px-3 py-2 text-sm font-semibold text-blue-500 bg-blue-100 rounded-2xl" @click="$emit('close')">
          Закрыть
        </button>
      </div>

      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Фамилия*
        </span>
        <input v-model="model.firstName" type="text" class="border border-gray-200 rounded-md focus:ring-blue-100" />
      </label>
      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Имя*
        </span>
        <input v-model="model.name" type="text" class="border border-gray-200 rounded-md focus:ring-blue-100" />
      </label>
      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Отчество
        </span>
        <input v-model="model.lastName" type="text" class="border border-gray-200 rounded-md focus:ring-blue-100" />
      </label>
      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Дата рождения*
        </span>
        <input v-model="model.birthday" type="date" class="border border-gray-200 rounded-md focus:ring-blue-100" />
      </label>
      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Номер телефона*
        </span>
        <input
          v-model="model.phone"
          type="number"
          maxlength="10"
          class="border border-gray-200 rounded-md focus:ring-blue-100"
          @focus="addFirstNumber"
          @blur="checkValue" />
      </label>
      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Пол
        </span>
        <select v-model="model.pol" class="rounded-md">
          <option value="Муж">Муж.</option>
          <option value="Жен">Жен.</option>
        </select>
      </label>

      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Менеджер
        </span>
        <select v-model="model.manager" class="rounded-md">
          <option value="Акаев">Акаев</option>
          <option value="Бакиев">Бакиев</option>
          <option value="Жээнбеков">Жээнбеков</option>
        </select>
      </label>

      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Группа клиентов*
        </span>
        <select v-model="model.group" multiple="true" class="rounded-md">
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
      </label>

      <label class="flex items-center space-x-2">
        <input v-model="model.sms" type="checkbox" />
        <span>Не отправлять SMS</span>
      </label>

      <label class="flex flex-col space-y-2">
        <span class="text-gray-500">
          Город*
        </span>
        <input v-model="model.city" type="text" class="border border-gray-200 rounded-md focus:ring-blue-100" />
      </label>

      <div>
        <button type="submit" class="w-full py-3 font-semibold text-white bg-blue-500 rounded-md">
          Сохранить
        </button>
      </div>


    </form>

    <transition
      enter-active-class="transition-all duration-200 transform easi-out-in"
      leave-active-class="transition-all duration-200 transform easi-out-in"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >

      <div v-if="error" class="fixed px-4 py-3 font-semibold text-red-500 bg-red-100 rounded-md top-5 left-5">
        {{ errorText }}!
      </div>

    </transition>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  data: () => ({
    model: {
      name: '',
      firstName: '',
      lastName: '',
      birthday: '',
      phone: '',
      pol: '',
      city: '',
      sms: false,
      manager: '',
      group: []
    },
    error: false,
    errorText: '',

  }),
  methods: {
    errorHandler(text) {
      this.errorText = text
      this.error = true

      setTimeout(() => {
        this.error = false
      }, 3000)
    },

    addFirstNumber() {
      if(this.model.phone.length <= 0) {
        this.model.phone = '0'
      }
    },

    checkValue() {
      if(this.model.phone.length <= 1 ) {
        this.model.phone = ''
      }
    },

    submit() {
      if(this.model.name.length <= 0 ) {
        this.errorHandler('Заполните поле имя')
        return
      }
      if(this.model.firstName.length <= 0 ) {
        this.errorHandler('Заполните поле фамилия')
        return
      }
      if(this.model.birthday.length <= 0 ) {
        this.errorHandler('Заполните поле дата рождения')
        return
      }
      if(this.model.phone.length < 10 ) {
        this.errorHandler('Заполните поле Телефоне не корректно, (10 символ)')
        return
      }
      if(this.model.phone.length > 10 ) {
        this.errorHandler('Заполните поле Телефоне не корректно, (10 символ)')
        return
      }
      if(this.model.group.length <= 0 ) {
        this.errorHandler('Выберите группу')
        return
      }
      if(this.model.city.length <= 0 ) {
        this.errorHandler('Назовите город')
        return
      }

      this.$store.commit('client/add', this.model)
      setTimeout(() => {
        this.$store.commit('client/loadingFalse')
      } , 2000)
      this.$emit('close')

    }
  }
}
</script>