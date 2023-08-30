<template>
    <div>
        <h1>Lista de Hoteles</h1>
        <div class="d-flex justify-content-start flex-wrap">
            <div v-for="hotel in hotels" :key="hotel.id">
               <router-link :to="'/hotel/' + hotel.id" class="nav-link"> <CardHotel :hotel="hotel"/> </router-link> 
            </div>
        </div>
            
        
    </div>
</template>
<script>

import HotelService from '../services/HotelService';
import CardHotel from './CardHotel.vue';

export default {
    name: 'HotelList',
    components: {
        CardHotel
    },
    data() {
        return {
            hotels: []
        }
    },

    mounted() {
        this.getAllHoteles();
    },

    methods: {
        async getAllHoteles() {
            const service = new HotelService();
            this.hotels = await service.fetchHotels();
        }
    }
}
</script>
<style></style>