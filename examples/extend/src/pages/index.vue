<template>
  <div>
    <p>index.vue</p>
    <router-link to="/about">
      about
    </router-link> |
    <router-link to="/jsx">
      jsx
    </router-link> |
    <router-link to="/tsx">
      tsx
    </router-link>
  </div>
</template>

<route lang="json">
{
  "name": "homepage",
  "meta": {
    "requiresAuth": false
  }
}
</route>
