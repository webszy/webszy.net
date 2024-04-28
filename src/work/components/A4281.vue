<script setup>

</script>

<template>
  <button>鼠标划过改变边框颜色</button>
  <a title="按钮悬浮提示" href="javascript:void(0);">按钮悬浮提示</a>
  <button class="tip-btn">
    <span>自定义按钮</span>
    <p>悬浮提示</p>
  </button>
</template>

<style scoped>
  button,a{
    padding: 16px;
    border: 1px solid black;
    transition: all 0.3s ease;
  }
  button:hover{
    border-color: salmon;
  }
  a{
    display: inline-block;
    margin-left: 16px;
    text-decoration: none;
    color: black;
    font-weight: normal;
  }
  a:hover{
    color: black;
  }
  .tip-btn{
    margin-left: 16px;
    position: relative;
  }
  .tip-btn p{
    display: none;
    padding: 4px;
    background: #ccc;
    color: #000;
    position: absolute;
    left:50%;
    top:-100%;
    transform: translateX(-50%);
    z-index: 1;
    white-space: nowrap;
  }
  .tip-btn:hover p{
    display: block;
  }

</style>
