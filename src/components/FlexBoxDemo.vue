<script setup>
import {reactive,ref} from "vue";
const fix = ref('')
const list = reactive([1,2,3,4,5,6,7,8,9])
</script>

<template>
  <div class="container">
    <div :class="`flex + ${fix}`" >
      <div v-for="(item, index) in list" :key="index" >{{item}}</div>
    </div>
    <button
        @click.once="list.push(10,11)"
        :disabled="list.length >= 10"
        :style="{cursor: list.length >= 10 ? 'not-allowed' : 'pointer'}"
    >
      增加两个item
    </button>
    <button @click.once="fix = 'fix' "
            :style="{cursor: fix==='fix' ? 'not-allowed' : 'pointer'}"
    >
      解决这种问题
    </button>
  </div>


</template>

<style scoped>
  .container{
    display: flex;
    align-items: flex-start;
  }
  .container > button{
    margin-left: 10px;
    padding: 10px;
    background: #3c3f44;
    border-radius: 4px;
    color: #fff;
  }
  .flex{
    width: 300px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border:1px solid black;
    box-sizing: border-box;
    padding: 10px;
  }
  .flex > div{
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
  }
  .fix:after{
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    opacity: 0;
  }
</style>
