<template>
  <div>
    <div class="d-flex align-center pb-5">
      <v-icon v-if="icon" style="font-size: 30px" class="pr-2" :color="color">
        {{ icon }}
      </v-icon>

      <p :class="`font-weight-black text-${color}`">
        {{ header }}
      </p>
    </div>
    <!-- <v-divider class="border-opacity-100 pb-5" :color="color" :thickness="3" /> -->
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
  },
}
</script>
