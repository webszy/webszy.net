<script setup>
import {ref} from 'vue';
const align = ref('flex-start');
</script>

<template>
  <div class="flex" >
    <p>1</p>
    <p>2</p>
  </div>
  <div style="display: flex;">
    <button @click="align = 'flex-start' ">顶部</button>
    <button @click="align = 'flex-end' ">底部</button>
    <button @click="align = 'center' ">居中</button>
    <button @click="align = 'stretch' ">平均</button>
  </div>

</template>

<style scoped>
.flex{
  width: 300px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: v-bind('align');
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
