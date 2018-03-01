<template>
<section>
  <div class= "container">
    <b-field grouped group-multiline position="is-centered">
      <p class="control">
                <button class="button is-warning">
                  <span></span>
            <b-icon icon="thumb-up-outline"></b-icon>
            <span></span>
        </button>
            </p>
            <b-input type="url" minlength="10"
                maxlength="100" icon= "owl" :value = "value" ></b-input>
                <p class="control">
                <button class="button is-dark">
            <span></span><b-icon icon="thumb-down-outline"></b-icon><span></span>
        </button>
            </p>
        </b-field>
  </div>
</section>
</template>

<script>
export default {};
</script>
