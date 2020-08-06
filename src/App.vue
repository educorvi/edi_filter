<template>
  <div id="app" class="m-5">
   <b-card no-body>
     <b-tabs v-model="tabIndex" card fill>
       <filter-component @optionsChange="change" v-for="filter in filters" :filter="filter" :key="filter.title" ref="filtercomponents"/>
     </b-tabs>
     <b-card-footer>
       <filter-view @select="select" :applied-filters="appliedFilters"/>
     </b-card-footer>
   </b-card>


  </div>
</template>

<script>
import beispiel from "../Beispiel.json";
import FilterComponent from "@/components/filterComponent";
import FilterView from "@/components/filterView";
export default {
  name: 'App',
  components: {
    FilterView,
    FilterComponent

  },
  data() {
    return {
      tabIndex: 0,
      filterValues: {}
    }
  },
  computed: {
    filters() {
      return beispiel;
    },
    appliedFilters() {
      let newFilters = [];
      for (let filter of this.filters) {
        console.log(filter)
        newFilters.push({
          title: filter.title,
          options: filter.options.filter(option => this.filterValues[filter.title]?this.filterValues[filter.title][filter.options.findIndex(obj => obj.key === option.key)]:false)
        })
      }
      return newFilters;
    }
  },
  methods: {
    change(e) {
      this.$set(this.filterValues, e.title, e.val);
    },
    select(sec) {
      console.log(this.filters.findIndex(obj => obj.title === sec))
      this.tabIndex = this.filters.findIndex(obj => obj.title === sec);
    }
  },
}
</script>

<style>

</style>
