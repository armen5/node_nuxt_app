<template>
  <div>
    <div class="flex justify-center py-8">
      <p class="text-3xl text-bold">{{ time }}</p>
    </div>
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Username</th>
            <th scope="col" class="py-3 px-6">Email</th>
            <th scope="col" class="py-3 px-6">Post title</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in allPosts"
            :key="post.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <NuxtLink
                :to="'/user/' + post.user.id"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >{{ post.user.username }}</NuxtLink
              >
            </th>
            <td class="py-4 px-6">
              {{ post.user.email }}
            </td>
            <td class="py-4 px-6">
              {{ post.title }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      allPosts: [],
      time: '',
    }
  },
  mounted() {
    this.fetchPosts()
    setInterval(this.updateTime, 1000)
  },
  methods: {
    async fetchPosts() {
      const allPosts = await this.$http.$get(
        `${this.$config.serverUrl}/api/posts`
      )
      if (allPosts.length && allPosts[0].user) {
        this.allPosts = allPosts
      } else {
        this.fetchPosts()
      }
    },
    updateTime() {
      const date = new Date()
      this.time =
        this.zeroPadding(date.getHours(), 2) +
        ':' +
        this.zeroPadding(date.getMinutes(), 2) +
        ':' +
        this.zeroPadding(date.getSeconds(), 2)
    },
    zeroPadding(num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    },
  },
}
</script>

<style></style>
