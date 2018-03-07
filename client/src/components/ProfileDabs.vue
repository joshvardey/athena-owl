<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{dab.title}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      {{dab}}
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: {
    dab: {}
  }
};
</script>