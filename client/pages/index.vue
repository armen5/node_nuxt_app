<template>
  <Main />
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    if (!localStorage.fetched) {
      this.fetchUsers()
      this.fetchPosts()
    }
  },
  methods: {
    async fetchPosts() {
      const allPosts = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      localStorage.setItem('fetched', true)
      this.storePosts(allPosts)
    },
    async storePosts(posts) {
      await this.$http.$post(`${this.$config.serverUrl}/api/posts`, {
        posts,
      })
    },
    async fetchUsers() {
      const allUsers = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/users'
      )
      localStorage.setItem('fetched', true)
      this.storeUsers(allUsers)
    },
    async storeUsers(users) {
      await this.$http.$post(`${this.$config.serverUrl}/api/users`, {
        users,
      })
    },
  },
}
</script>
