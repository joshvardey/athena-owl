<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <router-link :to="'/thread/' + thread._id">{{thread.title}}</router-link>
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{thread.description}}
      </div>
      <button v-if="checkIfUser" class="button is-warning" @click="confirmCustomDelete">
        Delete whole thread
      </button>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      thread: {}
    },
    computed: {
      checkIfUser() {
        return (this.$root.user.id === this.thread.creator)
      }
    },
    methods: {
      confirmCustomDelete() {
        this.$dialog.confirm({
          title: 'Deleting thread',
          message: 'Are you sure you want to <b>delete</b> this thread? This action cannot be undone.',
          confirmText: 'Delete Thread',
          type: 'is-danger',
          hasIcon: true,
          onConfirm: () => this.$toast.open('Thread deleted!')
        })
      },
      deleteT() {
        this.$emit("deletethread", { threadId: this.thread._id });
      }
    }
  }
</script>