<template>
  <div class="hello">
    <!-- <input v-focus v-model="name" placeholder="请输入名字" /> -->
    <just-text></just-text>
    <input v-model="name" placeholder="请输入名字" />
    <button @click="submit">提交</button>
    <just-message ref="msg"></just-message>
    <just-button ref="btn"></just-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: function() {
    return {
      name: '',
    };
  },
  methods: {
    submit() {
      if (!this.name) {
        this.$refs.msg.show('1请输入名字');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
