<script setup>
import EventCard from '@/components/EventCard.vue'
//这是父主视图
/* '@/components/EventCard.vue'等同于'../components/EventCard.vue'
@ 是一种常用的别名，用于简化模块导入路径。这个别名通常在项目的配置文件中定义，例如 Webpack、Vite 或其他构建工具的配置。
@ 符号通常代表项目的根目录或者 src 目录。这样写可以让你在导入模块时避免使用相对路径，这样可以使导入路径更加简洁和可读。
*/
</script>

<template>
  <div class="home">
    <EventCard />
    <!-- ES6 模块导入语法 -->
  </div>
</template>
