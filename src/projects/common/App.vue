<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="less">
html,
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  min-width: 1200px;
}
</style>
