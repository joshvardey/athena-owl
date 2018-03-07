<template>
  <div :class="{'timeline-is-left': dab.opinion}" class="timeline-item is-warning">
    <div class="timeline-marker is-warning is-image is-32x32">
      <router-link :to="'/profile/' + dab.creator"><img :src="dab.creatorPic"></router-link>
    </div>
    <div class="timeline-content">
      <p class="heading">{{dab.title}}</p>
      <p>{{dab.description}}</p>
      <p>
        <button class="button is-focussed is-small is-primary" @click.prevent="handleClickUp" :disabled="disabled">
        <b-icon icon="arrow-up-bold-circle-outline">
        </b-icon></button><span class="tag is-warning">{{votesUp.length}}</span><button class="button is-focussed is-small is-dark" @click.prevent="handleClickDown" :disabled="disabled">
        <b-icon icon="arrow-down-bold-circle-outline">
        </b-icon></button><span class="tag is-warning">{{votesDown.length}}</span>
      </p>
      <a target="_blank" :href="dab.link">Source link: {{dab.sourceName}}</a>
    </div>
  </div>
  
</template>


<script>
import api from "../api";
export default {
  data() {
    return {
      disabled: false,
      enoughVotes: true,
      votesUp: [],
      votesDown: []
    };
  },

  props: {
    dab: Object
  },
  created() {
    if (!this.dab.votes) {
      return;
    } else {
      this.dab.votes.forEach(dab => {
        for (votes in dab)
          if (vote.opinion === true) {
            this.votesUp.push(vote);
          } else {
            this.votesDown.push(vote);
          }
      });
    }
  },
  methods: {
    emitUpvote() {
      this.$emit("voted", { dabId: this.dab._id, opinion: true });
    },
    emitDownvote() {
      this.$emit("voted", { dabId: this.dab._id, opinion: false });
    },
    handleClickUp() {
      this.emitUpvote();
      this.disabler();
    },
    handleClickDown() {
      this.emitDownvote();
      this.disabler();
    },
    disabler() {
      this.disabled = true;
    },
    postViewer() {
      if (this.votesUp < 5 && this.votesDown > 30) {
        this.enoughVotes = false;
      }
    },
    profileHandler() {
      this.$emit("profile", { userPic: this.dab.creator });
    }
  }
};
// v-show="enoughVotes"
// <div class="code"><p v-show="!enoughVotes">This post has not received enough votes. Click to reveal.</p></div>
// <button @click="!enoughVotes = enoughVotes"
</script>

