<template>
  <section>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <Debate v-for="thread in threads" :thread="thread" :key="thread._id" class="tile is-child">
        </Debate>
      </div>
    </div>
  </section>
</template>

<script>
  import Debate from "../components/Debate.vue";
  import api from "../api";
  export default {
    data() {
      return {
        threads: {}
      };
    },
    components: { Debate },
    created() {
      api.getThreads().then(threads => {
        this.threads = threads;
      });
    }
  };
</script>