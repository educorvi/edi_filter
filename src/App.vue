<template>
  <div id="app">
    <div v-if="!err">
      <b-card no-body>
        <b-tabs card fill v-model="tabIndex">
          <filter-component :filter="filter" :key="filter.title" @optionsChange="change" ref="filtercomponents"
                            v-for="filter in filters"/>
        </b-tabs>
        <b-card-footer v-if="appliedFilters.length">
          <filter-view :applied-filters="appliedFilters" @select="select"/>
        </b-card-footer>
      </b-card>
      <div class="mt-2">
        <b-button @click="removeAllFilters" class="float-left">Alle Filter entfernen</b-button>
        <!--      <b-button variant="primary" class="float-right" @click="setCookie">Suche aktualisieren</b-button>-->
      </div>
    </div>
    <b-alert show v-else variant="danger">Filter konnten nicht geladen werden</b-alert>
  </div>
</template>

<script>
import FilterComponent from "@/components/filterComponent";
import FilterView from "@/components/filterView";
import axios from "axios"

export default {
  name: 'App',
  components: {
    FilterView,
    FilterComponent

  },
  data() {
    return {
      tabIndex: 0,
      filterValues: {},
      filters: [],
      err: null,
      id: ""
    }
  },
  computed: {
    appliedFilters() {
      let newFilters = [];
      for (let filter of this.filters) {
        const tp = {
          id: filter.id,
          title: filter.title,
          options: filter.options.filter(option => this.filterValues[filter.title] ? this.filterValues[filter.title][filter.options.findIndex(obj => obj.key === option.key)] : false)
        };
        if (tp.options.length > 0) {
          newFilters.push(tp)
        }
      }
      return newFilters;
    }
  },
  methods: {
    change(e) {
      this.$set(this.filterValues, e.title, e.val);
    },
    select(sec) {
      this.tabIndex = this.filters.findIndex(obj => obj.title === sec);
    },
    setCookie() {
      this.$cookie.set(this.id+'_filters', JSON.stringify(this.appliedFilters));
    },
    removeAllFilters() {
      for (let item of this.$refs.filtercomponents) {
        item.setSelected([]);
      }
      this.$cookie.set(this.id+'_filters', JSON.stringify([]));
    }
  },
  mounted() {
    axios.get("options-view").then(res => {
      this.filters = res.data.optionen;
      this.id = res.data.context;
      this.$nextTick(function () {
        const filters = JSON.parse(this.$cookie.get(this.id+'_filters'));
        if (filters) {
          for (let filter of filters) {
            let i = this.filters.findIndex(obj => obj.title === filter.title);
            this.$refs.filtercomponents[i].setSelected(filter.options);
          }
        }
      });

    })
  },
  watch: {
    filterValues: {
      deep: true,
      handler() {
        this.setCookie()
      },
    }
  }
}
</script>

<style>

</style>
