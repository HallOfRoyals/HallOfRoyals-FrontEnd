<template>
  <div className="">
    <h4 className="text-center mt-40 sub-title">Legendary Royals</h4>
    <div className="row mt-20">
      <div
        v-for="(itemDetails, index) in item.items"
        :key="index"
        className="col-sm-6 col-md-3 showcase-x"
      >
        <img :src="itemDetails.image" alt="" />
        <h5 v-if="itemDetails.name" className="text-center gallery-name mt-10">
          {{ itemDetails.name }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, mixins, Options } from "vue-class-component";

class Props {
  item!: unknown;
}

class BaseClass extends Vue.with(Props) {}

@Options({
  props: {
    item: {
      required: true,
    },
  },
})
export default class GalleryView extends mixins(BaseClass) {}
</script>
