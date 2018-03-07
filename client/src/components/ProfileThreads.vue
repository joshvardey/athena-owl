<template>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{thread.title}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      {{thread.description}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    thread: {}
  }
};
</script>
