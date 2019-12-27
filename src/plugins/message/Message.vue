<template>
  <div class="hello">
    <div class="msg" :class="{ active: msgStatus }">
      <div class="msg-wrapper">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JustMessage',
  props: {
    msg: String,
  },
  data: function() {
    return {
      text: '',
      msgStatus: false,
    };
  },
  methods: {
    show(msg, time) {
      this.text = msg;
      this.msgStatus = true;

      setTimeout(() => {
        this.msgStatus = false;
      }, time || 2000);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.msg {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 50%);
  width: 0;
  min-height: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: #fff;
  transition: all 0.5s;
  z-index: -1;
  opacity: 0;
}
.msg.active {
  width: 150px;
  min-height: 25px;
  opacity: 1;
  z-index: 2;
}
</style>
