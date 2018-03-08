<template>
  <div :class="{'timeline-is-left': dab.opinion}" class="timeline-item is-warning">
    <div class="timeline-marker is-warning is-image is-32x32">
      <router-link :to="'/profile/' + dab.creator">
        <img :src="dab.creatorPic">
      </router-link>
    </div>
    <div class="timeline-content">
      <h2 class="heading">
        <strong>{{dab.title}}</strong>
      </h2>
      <p>{{dab.description}}</p>
      <p>
        <section>
          <div class="control">
            <b-taglist attached>
              <b-tag class="is-focussed is-small" :rounded="true" @click.prevent.native="emitUpvote">
                <b-icon icon="thumb-up-outline" type="is-primary" size="is-small">
                </b-icon>
              </b-tag>
              <b-tag>{{votesUp}}</b-tag>
              <b-tag class="is-focussed is-small" @click.prevent.native="emitDownvote">
                <b-icon icon="thumb-down-outline" type="is-dark" size="is-small">
                </b-icon>
              </b-tag>
              <b-tag :rounded="true">{{votesDown}}</b-tag>
            </b-taglist>
          </div>
        </section>
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
        enoughVotes: true,
        rounded: true
      };
    },

    props: {
      dab: Object
    },

    computed: {
      votesUp() {
        return this.dab.votes.filter(vote => vote.opinion).length;
      },
      votesDown() {
        return this.dab.votes.filter(vote => !vote.opinion).length;
      }
    },

    methods: {
      emitUpvote() {
        this.$emit("voted", { dabId: this.dab._id, opinion: true });
      },
      emitDownvote() {
        this.$emit("voted", { dabId: this.dab._id, opinion: false });
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