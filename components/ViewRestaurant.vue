<script setup lang="ts">
import type { Restaurant } from '~/types'; // types/index.tsからUser型をインポート
defineProps<{
  restaurant: Restaurant;
}>();
const ZOOM_LV = 500;
</script>
<template>
    <div class="container text-center">
        <div class="row">
            <div class="csol">
                {{ restaurant.id }}
            </div>
            <div class="col">
                {{ restaurant.name }}
            </div>
        </div>
        <div class="row">
            <iframe
                :src="`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d${ZOOM_LV}!2d${restaurant.longitude}!3d${restaurant.latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sja!2sjp!4v1234567890`"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<style></style>