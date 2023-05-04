<template>
  <BaseLayout>
    <router-view></router-view>
  </BaseLayout>
</template>

<script>
import BaseLayout from './layouts/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    BaseLayout,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
