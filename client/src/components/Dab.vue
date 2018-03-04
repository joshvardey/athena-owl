<template>
  <div class="timeline-item is-warning" :class="{'timeline-is-left': dab.opinion}">
      <div class="timeline-marker is-warning is-image is-32x32">
        <img :src="$root.user.picture">
      </div>
      <div class="timeline-content">
        <p class="heading">{{dab.title}}</p>
        <p>{{dab.description}}</p>
        <p><b-icon
                icon="arrow-up-bold-circle-outline"
                size="is-small"
                type="is-primary">
            </b-icon><b-icon
                icon="arrow-down-bold-circle-outline"
                size="is-small">
            </b-icon></p><a target="_blank" :href="dab.link">{{dab.sourceName}}</a>
        
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