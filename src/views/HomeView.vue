<template>
  <div class="container">
    <div class="row my-4">
      <div class="col">
        <button class="btn btn-primary"><router-link to="nuevo-hotel" class="nav-link">Crear Hotel</router-link> </button>
      </div>
    </div>
    
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
