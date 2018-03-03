
<template>
  <div class="container">
    <div>
      <p style="text-align:center;"><img src="../assets/athena-logo.jpg" alt="logo" width="600" height="400"></p>
</div>
    <router-link to="/profile">See login details</router-link><br>
  <form @submit.prevent="postThread">
    <section>
        <b-field label="Rounded">
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
                field="user.first_name"
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
