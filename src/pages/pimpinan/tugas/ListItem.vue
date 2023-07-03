<template>
  <div class="row q-mt-sm">
    <div class="col-lg-2 col-md-3 col-sm-4 col-xs-5">
      {{label}}
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8 col-xs-7" v-if="useSlot">
      : <slot name="mySlot"></slot>
    </div>
    <div class="col-lg-10 col-md-9 col-sm-8 col-xs-7" v-else>
      : {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: String,
    useSlot: {
      type: Boolean,
      default: false
    }
  }
}
</script>
