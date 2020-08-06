<template>
  <div class="mt-3">
    <div style="display: flex; flex-wrap: wrap; justify-content: flex-start">
      <div  :key="'applied '+filter.title" v-for="filter in appliedFilters" class="pr-4">
        <filter-view-single @select="function (sec){$emit('select', sec)}" :filter="filter"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterViewSingle from "@/components/filterViewSingle";

export default {
  name: "filterView",
  components: {FilterViewSingle},
  props: {
    appliedFilters: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
