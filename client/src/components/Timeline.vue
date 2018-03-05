<template>
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Latest</span>
    </header>

    <slot/>
    
    <header class="timeline-header">
      <span class="tag is-medium is-primary"></span>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    dab: Object
  }
};
</script>

<style>
/* Reset defaults to always go right */

.timeline.is-centered .timeline-item.timeline-item {
  margin-right: 0;
  margin-left: 2em;
  align-self: flex-end;
}

.timeline.is-centered .timeline-item.timeline-item::before {
  right: auto;
  left: auto;
}

.timeline.is-centered .timeline-item .timeline-marker {
  left: -0.35em;
  right: auto;
}
.timeline.is-centered .timeline-item .timeline-marker.is-icon {
  left: -0.75em;
  right: auto;
}

.timeline.is-centered
  .timeline-item.timeline-item
  .timeline-marker.is-image.is-32x32 {
  left: -16px;
  right: auto;
}

.timeline.is-centered .timeline-item.timeline-item .timeline-content {
  padding: 1em 0 0 2em;
  text-align: left;
  align-items: flex-start;
}

/* force left */

.timeline.is-centered .timeline-item.timeline-is-left {
  align-self: flex-start;
  margin-left: 0;
  margin-right: 2em;
}

.timeline.is-centered .timeline-item.timeline-is-left::before {
  right: -0.1em;
  left: auto;
}

.timeline.is-centered .timeline-item.timeline-is-left .timeline-marker {
  left: auto;
  right: -7px;
}

.timeline.is-centered
  .timeline-item.timeline-is-left
  .timeline-marker.is-image.is-32x32 {
  left: auto;
  right: -16px;
}

.timeline.is-centered .timeline-item.timeline-is-left .timeline-marker.is-icon {
  left: auto;
  right: -0.75em;
}

.timeline.is-centered .timeline-item.timeline-is-left .timeline-content {
  padding: 1em 2em 0 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 100%;
}

.timeline.is-centered .timeline-item.timeline-is-left {
  align-self: flex-start;
  margin-left: 0;
  margin-right: 2em;
}
</style>
