<template>
  <div class="container">
    <h1 class="title" style="text-align:center;">{{thread.title}}</h1>
    <DabInput @dab-is-created="dabInput"></DabInput>
    <br>
    <Timeline v-if="thread">
      <Dab v-for="dab in thread.dabs" :dab="dab" :key="dab._id"/>
    </Timeline>
  </div>
</template>

<script>
import Timeline from "../components/Timeline";
import Dab from "../components/Dab";
import DabInput from "../components/DabInput";
import api from "../api";
export default {
  data() {
    return {
      thread: {}
    };
  },
  created() {
    api.getOneThread(this.$route.params.id).then(thread => {
      this.thread = thread;
    });
  },
  components: { Timeline, DabInput, Dab },
  methods: {
    dabInput(dab) {
      api
        .postDab(this.thread._id, dab)
        .then(dab => this.thread.dabs.unshift(dab))
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>