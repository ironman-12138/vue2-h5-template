<template>
  <div class="home">
    <router-view />
    <div style="height: 50px;"></div>
    <van-tabbar v-model="activeName" fixed route>
      <van-tabbar-item
        v-for="tabbarItem in tabbarList"
        :key="tabbarItem.id"
        :to="tabbarItem.to"
        :name="tabbarItem.name"
        :icon="tabbarItem.icon"
      >
        {{ tabbarItem.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components:{
    },
    data() {
      return {
        tabbarList: [
          { id: 1, name: 'home', icon: 'home-o', title: '首页', to: '/home/index' },
          { id: 2, name: 'setting', icon: 'setting-o', title: '自定义', to: '/home/sys' },
          { id: 3, name: 'user', icon: 'user-o', title: '我的', to: '/home/my' }
        ],
        activeName: "home"
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>
