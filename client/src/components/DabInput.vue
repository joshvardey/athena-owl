<template>
  <section>
    
    <div class="container">
      
      <b-field grouped group-multiline position="is-centered">
        <p class="control">
          <b-tooltip label="Post to agree" position="is-left">
            <button @click.prevent="emitAgree" class="button is-warning">
              <span></span>
              <b-icon icon="thumb-up-outline"></b-icon>
              <span></span>
            </button>
          </b-tooltip>
        </p>
        <b-tooltip label="Enter a url to continue the debate" :class="{always: isActive}">
        <b-input type="url" icon="owl" v-model="link"></b-input>
        </b-tooltip>
        <p class="control">
          <b-tooltip label="Post to disagree" position="is-right">
            <button @click.prevent="emitDisagree" class="button is-dark">
              <span></span>
              <b-icon icon="thumb-down-outline"></b-icon>
              <span></span>
            </button>
          </b-tooltip>
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
      isActive: true
    };
  },
  methods: {
    emitAgree() {
      this.$emit("dab-is-created", { link: this.link, opinion: true });
      this.link = "";
      this.isActive = false;
    },
    emitDisagree() {
      this.$emit("dab-is-created", { link: this.link, opinion: false });
      this.link = "";
      this.isActive = false;
    }
  }
};
</script>