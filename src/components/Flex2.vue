<script setup>
import {ref} from 'vue';
const warp = ref('wrap');
</script>

<template>
  <div class="flex" >
      <p v-for="i in 6">{{ i }}</p>
  </div>
  <div style="display: flex">
    <button @click="warp = 'wrap' ">换行</button>
    <button @click="warp = 'nowrap' ">不换行</button>
    <button @click="warp = 'wrap-reverse' ">反向换行</button>
  </div>

</template>

<style scoped>
.flex{
  width: 330px;
  height: 600px;
  display: flex;
  flex-wrap: v-bind('warp');
  border:1px solid black;
  box-sizing: border-box;
  padding: 10px;
}
p{
  width: 90px;
  height: 90px;
  background: salmon;
  opacity: 0.8;
  border-radius: 5px;
  border:1px solid salmon;
  margin-bottom: 10px;
  text-align: center;
  line-height: 90px;
  color: #fff;
  margin-right: 10px;
  flex-shrink: 0;
}
button{
  margin-left: 10px;
  padding: 10px;
  background: #3c3f44;
  border-radius: 4px;
  color: #fff;
  margin-top: 10px;
}
</style>
