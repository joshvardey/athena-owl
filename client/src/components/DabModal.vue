<template>
  <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes<b-icon
                icon="arrow-up-bold-circle-outline"
                size="is-small"
                type="is-primary">
            </b-icon></button>
      <button class="button">Cancel<b-icon
                icon="arrow-down-bold-circle-outline"
                size="is-small">
            </b-icon></button>
      
    </footer>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

