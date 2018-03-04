<template>
<section>
  <Debate v-for="thread in threads" :threads="thread" :key="thread._id">
    <DebateModal v-for="thread in threads" :threads="thread" :key="thread._id" :title="threads.title" :body="thread.title"/>
  </Debate>
    </section>
</template> 

<script>
import Debate from "../components/Debate.vue";
import DebateModal from "../components/DebateModal.vue";
import api from "../api";
export default {
  data() {
    return {
      threads: {}
    };
  },
  components: { Debate, DebateModal },
  created() {
    api.getThreads().then(threads => {
      this.threads = threads;
    });
  }
};
</script>