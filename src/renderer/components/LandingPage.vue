<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-md-12">
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <h1>PUBG EZ Crouch Jump</h1>

          <div class="row" v-for="binding in bindings" :key="binding.id">
            <div class="col-md-6 text-align-center">
              { binding.textPhrase }
            </div>
            <div class="col-md-6 text-align-center">
              <b-button @click="updateKeyBinding(binding)">{binding.name}</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      bindings: () => { console.log(this.$store.settings.state); return this.$store.settings.state; }
    }
  }
</script>

<style>
  h1, h2, h3, h4, h5, p, small {
    color: white;
  }
</style>
