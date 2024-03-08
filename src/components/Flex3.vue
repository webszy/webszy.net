<script setup>
import {ref} from 'vue';
const justify = ref('flex-start');
</script>

<template>
  <div class="flex" >
      <p v-for="i in 3">{{ i }}</p>
  </div>
  <div style="display: flex">
    <button @click="justify = 'flex-start' ">左对齐</button>
    <button @click="justify = 'flex-end' ">右对齐</button>
    <button @click="justify = 'center'">居中</button>
    <button @click="justify = 'space-between'">两端对齐</button>
    <button @click="justify = 'space-around'">平均分布</button>

  </div>

</template>

<style scoped>
.flex{
  width: 600px;
  display: flex;
  justify-content:  v-bind('justify');
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
