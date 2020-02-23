<template>
  <nav>
      <ul>
          <li>
        <router-link :to="{
            name: 'home',
          }">Home</router-link>
          </li>
          <li>
        <router-link :to="{
            name: 'anton',
          }">Antons Screen</router-link>
          </li>
      </ul>
  </nav>
</template>

<style scoped>
</style>