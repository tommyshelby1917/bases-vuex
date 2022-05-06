<template>
  <!-- Vuex -->
  <h1>Counter - Vuex</h1>
  <h2>Direct acces to store: {{$store.state.counter.count}}</h2>
  <h2>Computed acces to store: {{countComputed}}</h2>

  <button
    @click="increment"
    :disabled="isLoading"
  >+1</button>
  <button
    @click="incrementBy(5)"
    :disabled="isLoading"
  >+5</button>
  <button
    @click="incrementRandomInt"
    :disabled="isLoading"
  >Random</button>

  <!-- MapState -->
  <h1>MapState</h1>
  <h2>Count: {{count}}</h2>
  <h2>LastMutation: {{lastMutation}}</h2>

  <!-- Getters -->
  <h1>Getters</h1>
  <h2>Direct getter: {{$store.getters['counter/squareCount']}}</h2>

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]),
  },
  methods: {
    increment() {
      // Como no podemos hacer un cambio directamente en la store,
      // tenemos que hacerlo a traves de una mutacion con commit
      this.$store.commit("counter/increment");
    },
    incrementBy(val) {
      this.$store.commit("counter/incrementBy", val);
    },
    ...mapActions("counter", ["incrementRandomInt"]),
  },
};
</script>

