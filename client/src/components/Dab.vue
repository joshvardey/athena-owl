<template>
  <div class="timeline-item is-warning" :class="{'timeline-is-left': dab.opinion}">
      <div class="timeline-marker is-warning is-image is-32x32">
        <img :src="$root.user.picture">
      </div>
      <div class="timeline-content">
        <p class="heading">{{dab.title}}</p>
        <p>{{dab.description}}</p>
        <p>{{dab.sourceName}}</p><a target="_blank" :href="dab.link">Link</a>
      </div>
    </div>
</template>


<script>
import api from "../api";
export default {
  data() {
    return {};
  },
  props: {
    dab: Object
  }
};
</script>