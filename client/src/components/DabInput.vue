<template>
<section>
  <div class= "container">
    <b-field grouped group-multiline position="is-centered">
      <p class="control">
                <button @click.prevent="emitAgree" class="button is-warning">
                  <span></span>
            <b-icon icon="thumb-up-outline"></b-icon>
            <span></span>
        </button>
            </p>
            <b-input type="url" icon= "owl" v-model="link"></b-input>
                <p class="control">
                <button @click.prevent="emitDisagree" class="button is-dark">
            <span></span><b-icon icon="thumb-down-outline"></b-icon><span></span>
        </button>
            </p>
        </b-field>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      link: "",
      opinion: Boolean
    };
  },
  methods: {
    emitAgree() {
      this.$emit("dab-is-created", { opinion: true });
    },
    emitDisagree() {
      this.$emit("dab-is-created", { opinion: false });
    }
  }
};
</script>
