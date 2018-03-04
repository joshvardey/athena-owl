
<template>
  <section>
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">{{title}}</p>
                    </header>
                    <section class="modal-card-body">
{{body}}
                        <b-checkbox>Remember me</b-checkbox>
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="$parent.close()">Close</button>
                    </footer>
                </div>
  </section>
</template>

<script>
export default {
  props: ["body", "title"]
};
</script>

