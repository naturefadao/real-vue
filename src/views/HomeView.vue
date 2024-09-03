<script setup>
import EventCard from '@/components/EventCard.vue'
//这是父主视图
/* '@/components/EventCard.vue'等同于'../components/EventCard.vue'
@ 是一种常用的别名，用于简化模块导入路径。这个别名通常在项目的配置文件中定义，例如 Webpack、Vite 或其他构建工具的配置。
@ 符号通常代表项目的根目录或者 src 目录。这样写可以让你在导入模块时避免使用相对路径，这样可以使导入路径更加简洁和可读。
*/
import { ref } from 'vue'
/*ref 是 Vue 3 的 Composition API 中引入的一个概念，用于创建响应式引用。在 Vue 2 中，
响应式数据通常是通过 data() 返回的对象来管理的，而在 Vue 3 中，ref 和 reactive 用于管理响应式状态。
// 创建一个响应式引用
const message = ref('Hello, Vue 3!');

// 方法来更新响应式引用
function updateMessage() {
  message.value = 'Message updated!';
}
*/
const events = ref([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee'
  }
])
</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- ES6 模块导入语法 -->
  </div>
</template>
<style scoped>
/*作用范围是一下列出的组件*/
.events {
  display: flex;
  flex-direction: column; /*设置主轴的方向*/
  align-items: center; /*设置交叉轴上的对齐方式*/
}
</style>
