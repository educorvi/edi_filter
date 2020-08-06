<template>
  <b-tab :title="filter.title">
    <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap; align-items: center">
      <b-checkbox :key="option.key" v-for="(option, index) in filter.options" v-model="optionsSelected[index]">
        {{ option.value }}
      </b-checkbox>
      <b-button @click="unselectAll" :disabled="!(selected>0)">Alle Löschen</b-button>
    </div>
  </b-tab>
</template>

<script>
export default {
  name: "filterComponent",
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  computed: {
    selected(){
      const summarizer = (a, c) => c ? a + 1 : a;
      return this.optionsSelected.reduce(summarizer, 0);
    }
  },
  watch: {
    optionsSelected: function (newVal) {
      this.$emit("optionsChange", {
        val: newVal,
        title: this.filter.title
      })
    }
  },
  data() {
    return {
      optionsSelected: []
    }
  },
  methods: {
    unselectAll() {
      this.optionsSelected = [];
    }
  },
}
</script>

<style scoped>

</style>
