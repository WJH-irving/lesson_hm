<template>
    <div>
        <p id = "count">Lifecyle Component - Count:{{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps,
     onBeforeMount ,
     onMounted,
     onBeforeUnmount ,
     onUnmounted ,
     onBeforeUpdate, 
     onUpdated 
    } from 'vue';

  defineProps({
    count: {
      type: Number,
      required: true
    }
  })

//   console.log('haha');
 
  // 组件有生老病死 
  onMounted(() => {
    // on 某个阶段
    // mounted 挂载
    // 已经完成了挂载
    console.log('已经挂载');
    console.log(document.getElementById('count'),'--------------');
  }) 
  onBeforeMount(() => {
    // before 某个阶段
    // mount 挂载
    // 即将挂载
    console.log(document.getElementById('count'),'--------------');
    console.log('即将挂载');
  })
  onBeforeUnmount(() => {
    // before 某个阶段
    // unmount 卸载
    // 即将卸载
    console.log('即将卸载');
  })
  onUnmounted(() => {
    // unmount 卸载
    // 已经卸载
    console.log('已经卸载');
  })
  onBeforeUpdate(() => {
    // before 某个阶段
    // update 更新
    // 即将更新
    console.log('即将更新');
  })
  onUpdated(() => {
    // update 更新
    // 已经更新
    console.log('已经更新');
  })
  </script>
  
  <style scoped>
  
  </style>