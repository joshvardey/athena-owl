
<template>
  <div class="container">
    <div>
      <p style="text-align:center;"><img src="../assets/athena-logo.jpg" alt="logo" width="600" height="400"></p>
</div>
    <router-link to="/profile">See login details</router-link><br>
  <div class = "section-body">
  <form @submit.prevent="postThread">
    <section>
        <b-field>
            <b-input placeholder="Start a conversation"
                size="is-large"
                icon="feather" v-model="threadTitle">
            </b-input>
        </b-field>
        <b-field label="Enter some tags">
            <b-taginput
                v-model="tags"
                type="is-dark"
                :data="filteredTags"
                autocomplete
                :allowNew="allowNew"
                field="tags"
                icon="label"
                placeholder="Add a tag"
                @typing="getFilteredTags"
                rounded>
            </b-taginput>
        </b-field>
            <input class="button" type="submit" value="Submit">      
    </section>
  </form>
</div>
  </div>
</template>

<script>
import api from "../api";
import data from "../assets/tags.json";
export default {
  data() {
    return {
      threadTitle: "",
      filteredTags: data,
      isSelectOnly: false,
      tags: [],
      allowNew: false
    };
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
    postThread() {
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


