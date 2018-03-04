<template>
  <span>
<button class="button is-primary is-medium"
            @click="cardModal()">
            {{threads.title}}
        </button>
  </span>
</template>


<script>
import DebateModal from "./DebateModal.vue";
export default {
  props: {
    threads: Object
  },
  methods: {
    cardModal() {
      this.$modal.open({
        parent: this,
        component: DebateModal,
        hasModalCard: true
      });
    }
  }
};
</script>