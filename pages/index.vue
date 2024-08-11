<script setup>
import { ref, onMounted } from 'vue';

const restaurants = ref(null);
onMounted(async () => {
    try {
        restaurants.value = await $fetch('/api/database?table=restaurants');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>
<template>
    <div class="top-dummy">
    <TopContent />
    </div>
    食べたい中華が見つかるサイト
    <template v-for="restaurant in restaurants">
        <ViewRestaurant :restaurant="restaurant" />
    </template>
    <ul class="list-group">
  <li class="list-group-item">りんご<span class="badge badge-primary">20</span></li>
  <li class="list-group-item">バナナ<span class="badge badge-primary">10</span></li>
  <li class="list-group-item">みかん<span class="badge badge-primary">22</span></li>
</ul>
</template>

<style>
.top-dummy {
    height:100vh;
}
.top-site {
    width: 100%;
    height: 500px;
    background-color: #333;
}
</style>