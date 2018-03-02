
<template>
  <div class="container">
    <h1 class="title">Homepage</h1>

    <router-link to="/profile">See if logged in</router-link><br>
    <router-link to="/thread">Go to thread skeleton</router-link>

    <section>
        <b-field label="Rounded">
            <b-input placeholder="Start a debate"
                size="is-large"
                icon="feather">
            </b-input>
        </b-field>
        <div class="buttons">
  <span class="button is-success">Politics</span>
  <span class="button is-info">Religion</span>
  <span class="button is-danger">Culture</span>
  <span class="button is-primary">Science</span>
</div>
            <input class="button" type="submit" value="Submit">        
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      threadTitle: "",
      tags: ""
    };
  },
  methods: {
    postThread() {
      this.error = null;
      api
        .postThread()
        .then(() => {
          this.$router.push("/thread");
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
