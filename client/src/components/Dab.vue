<template>
  <div class="timeline-item is-warning">
      <div class="timeline-marker is-warning is-image is-32x32">
        <img src="../assets/little-owl.jpg" {{dab.creator.picture}}>
      </div>
      <div class="timeline-content">
        <p class="heading">{{dab.title}}</p>
        <p>{{dab.content}}</p>
      </div>
    </div>
</template>


<script>
export default {
  props: {
    dab: Object
  }
};
</script>