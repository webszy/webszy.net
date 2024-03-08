<script setup>
</script>

<template>
  <div class="flex" >
    <p>1</p>
    <p>2</p>
  </div>

</template>

<style scoped>
.flex{
  width: 300px;
  display: flex;
  flex-wrap: wrap;
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
p:nth-child(2){
  flex:1
}
</style>
