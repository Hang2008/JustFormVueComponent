<template>
  <div>
    <button @click="handleClick">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'JustButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {};
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
