<template>
    <div>
        <h1>Lista de Hoteles</h1>
        <ul>
            <li v-for="hotel in hotels" :key="hotel.id">
                <h2>{{ hotel.id }}</h2>
                <p>Ubicación: {{ hotel.name }}</p>
                <p>Precio: {{ hotel.city }}</p>
                <p>Comodidades: {{ hotel.address }}</p>
            </li>
        </ul>
    </div>
</template>
<script>

import HotelService from '../services/HotelService';

export default {
    name: 'HotelList',
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