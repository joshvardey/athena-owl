<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      <a target="_blank" :href="dab.link">{{dab.title}}</a>
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      {{dab.description}}
    </div>
    <button v-if="checkIfUser" class="button is-warning" @click.prevent="deleteD">Delete dab</button>
  </div>
</div>

</template>

<script>
export default {
  props: {
    dab: {},
    thread: {}
  },
  computed: {
    checkIfUser() {
      return this.$root.user.id === this.dab.creator;
    }
  },
  methods: {
    deleteD() {
      this.$emit("deletedab", { dabId: this.dab._id });
    }
  }
};
</script>