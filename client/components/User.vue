<template>
  <div class="flex justify-center items-center h-screen">
    <div
      v-if="user"
      class="block p-6 w-3/5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Name:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.name }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Username:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.username }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Email:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.email }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Phone:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.phone }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Website:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.website }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Address:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{
            user.address.city +
            ', ' +
            user.address.street +
            ', ' +
            user.address.suite +
            ', ' +
            user.address.zipcode
          }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Company:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.company.name }}
        </p>
      </div>
      <div class="flex justify-between items-center mb-3">
        <h5
          class="mr-5 font-normal tracking-tight text-gray-900 dark:text-white"
        >
          Total number of posts:
        </h5>
        <p class="font-bold text-gray-700 dark:text-gray-400">
          {{ user.posts.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    this.getUserById(this.$route.params.user)
  },
  methods: {
    async getUserById(id) {
      const getUser = await this.$http.$get(
        `${this.$config.serverUrl}/api/users/${id}`
      )
      this.user = getUser
    },
  },
}
</script>

<style></style>
