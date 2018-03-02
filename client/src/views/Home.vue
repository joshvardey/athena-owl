
<template>
  <div class="container">
    <div>
      <p style="text-align:center;"><img src="../assets/athena-logo.jpg" alt="logo" width="600" height="400"></p>
</div>
    <router-link to="/profile">See if logged in</router-link><br>
    <router-link to="/thread">Go to thread skeleton</router-link>
  <form @submit.prevent="postThread">
    <section>
        <b-field label="Rounded">
            <b-input placeholder="Start a debate"
                size="is-large"
                icon="feather" v-model="threadTitle">
            </b-input>
        </b-field>
        <div class="buttons">
  <span class="button is-success">Politics</span>
  <span class="button is-info">Religion</span>
  <span class="button is-danger">Culture</span>
  <span class="button is-primary">Science</span>
</div>
            <input class="button" type="submit" value="Submit" v-model="tags">        
    </section>
  </form>

  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      threadTitle: "",
      tags: []
    };
  },
  methods: {
    postThread() {
      console.log("hi");
      this.error = null;
      api
        .postThread({
          title: this.threadTitle,
          tags: this.tags
        })
        .then(thread => {
          this.$router.push("/thread/" + thread._id);
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
