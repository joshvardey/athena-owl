<template>
  <div class="timeline-item is-warning" :class="{'timeline-is-left': dab.opinion}">
    <div class="timeline-marker is-warning is-image is-32x32">
      <img :src="$root.user.picture">
    </div>
    <div class="timeline-content">
      <p class="heading">{{dab.title}}</p>
      <p>{{dab.description}}</p>
      <p>
        <button class="button is-focussed is-warning is-small" @click.prevent="emitUpvote" @click="isActive" :class="disabled" >
        <b-icon icon="arrow-up-bold-circle-outline">
        </b-icon></button><button class="button is-focussed is-small is-dark" @click.prevent="emitDownvote">
        <b-icon icon="arrow-down-bold-circle-outline" type="is-white">
        </b-icon></button>
      </p>
      <a target="_blank" :href="dab.link">{{dab.sourceName}}</a>
    </div>
  </div>
</template>


<script>
import api from "../api";
export default {
  data() {
    return {
      isActive: false
    };
  },

  props: {
    dab: Object
  },
  methods: {
    emitUpvote() {
      this.$emit("voted", { dabId: this.dab._id, opinion: true });
    },
    emitDownvote() {
      this.$emit("voted", { dabId: this.dab._id, opinion: false });
    },
    disabler() {
      this.isActive = !this.isActive;
    }
  }
};
</script>