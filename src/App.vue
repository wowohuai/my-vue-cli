<template>
  <div id="app">
    <keep-alive exclude="[Detail, City]">
      <router-view />
    </keep-alive>
  </div>
</template>
