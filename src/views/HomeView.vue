<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HotelList />
  </div>
</template>

<script>
// @ is an alias to /src
import HotelList from '@/components/HotelList.vue'

export default {
  name: 'HomeView',
  components: {
    HotelList
  }
}
</script>
