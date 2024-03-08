<script setup>
import {ref} from 'vue';
const direction = ref('row');
</script>

<template>
  <div class="flex">
      <p v-for="i in 3">{{ i }}</p>
  </div>
  <button @click="direction = direction === 'row'? 'column' : 'row'">切换方向</button>

</template>

<style scoped>
.flex{
  width: 300px;
  display: flex;
  flex-direction: v-bind('direction');
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
