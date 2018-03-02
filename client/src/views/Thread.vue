<template>
  <div class="container">
    <h1 class="title">Thread timeline</h1>
    <DabInput :dab-is-created.sync="dabInput"></DabInput>
    <br>
    <Timeline>
      <Dab v-for="dab in dabs" :dab="dab" :key="dab._id"/>
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
      dabs: [],
      thread: []
    };
  },
  created() {
    api.getOneThread(this.thread.id).then(res => {
      this.thread = thread;
    });
  },
  components: { Timeline, DabInput, Dab },
  methods: {
    dabInput() {
      api.postDab(this.thread._id, {
        link: this.link,
        description: this.description,
        opinion: this.opinion
      });
    }
  }
};
</script>