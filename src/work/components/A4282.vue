<script setup>
import {NForm, NFormItem, NInput,NButton} from 'naive-ui'
import 'naive-ui/lib/input/styles'
import 'naive-ui/lib/form/styles'
import 'naive-ui/lib/button/styles'
import {reactive, ref} from "vue";
const formData = reactive({})
const formRef = ref(null)
const rules = {
  formData:{
    name:{
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  }
}
const handleValidateClick = () => {
  formRef.value.validate(
      errors => {
        if (!errors) {
          console.log('验证通过')
        } else {
          console.log('验证失败')
        }
      }
  )
}
</script>

<template>
  <n-form ref="formRef" :rules="rules" :model="formData">
    <n-form-item label="Username" path="formData.name">
      <n-input v-model:value="formData.name" placeholder="请输入用户名" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>
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
