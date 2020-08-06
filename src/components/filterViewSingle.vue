<template>
  <div :id="'div_for_'+filter.title" @click="function() {$emit('select', filter.title)}"
       class="p-2 mb-3" style="border-radius: 12px; background-color: #0275d8; color: white; cursor: pointer; max-width: 172px"
       v-if="filter.options.length">
    <!--    <b-row >-->
    <!--      <b-col cols="9">-->
    <!--        <h6 class="m-0 mb-1">{{ filter.title }}:</h6>-->
    <!--      </b-col>-->
    <!--      <b-col cols="3">-->
    <!--        <b-icon-x @click="deleteAll" style="cursor: pointer"/>-->
    <!--      </b-col>-->
    <!--    </b-row>-->
    <h6 class="m-0 mb-1">{{ filter.title }}:</h6>
    <p>{{filter.options.map(obj => obj.value).join(", ") }}</p>
  </div>
</template>

<script>
export default {
  name: "filterViewSingle",
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    // let rgb = [];
    // for (let i = 0; i < 3; i++)
    //   rgb.push(Math.floor(Math.random() * 255));
    // const brightness = Math.round(((parseInt(rgb[0]) * 299) +
    //     (parseInt(rgb[1]) * 587) +
    //     (parseInt(rgb[2]) * 114)) / 1000);
    // document.getElementById('div_for_' + this.filter.title).style.color = (brightness > 100) ? 'black' : 'white';
    // document.getElementById('div_for_' + this.filter.title).style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
  }
}
</script>

<style scoped>

</style>
