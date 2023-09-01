<template>
    <div class="my-3 col-12 col-md-6">
        <h3>Editar Hotel</h3>
        <form @submit.prevent="submitForm">
            <div class="mb-1">
                <label for="nombre" class="form-label">Nombre del Hotel</label>
                <input type="text" class="form-control" id="nombre" v-model="hotel.name" required>
            </div>
            <div class="mb-1">
                <label for="ciudad" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="ciudad" v-model="hotel.city" required>
            </div>
            <div class="mb-1">
                <label for="direccion" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direccion" v-model="hotel.address" required>
            </div>
            <div class="mb-1">
                <label for="telefono" class="form-label">Teléfono</label>
                <input type="tel" class="form-control" id="telefono" v-model="hotel.phone" required>
            </div>
            <div class="mb-1">
                <label for="habitaciones" class="form-label">Número de Habitaciones</label>
                <input type="number" class="form-control" id="habitaciones" v-model="hotel.number_rooms" required>
            </div>
            <div class="mb-1">
                <label for="nit" class="form-label">NIT</label>
                <input type="text" class="form-control" id="nit" v-model="hotel.nit" required>
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </div>
</template>

<script>

import HotelService from '../services/HotelService';

export default {
    data() {
        return {
            id: 0,
            hotel: {
                name: '',
                city: '',
                address: '',
                phone: '',
                number_rooms: '',
                nit: ''
            }
        };
    },
    created(){
        this.id = this.$route.params.id
    },
    mounted(){
        this.getHotel(this.id);
    },
    methods: {

        submitForm() {
            const hotelService = new HotelService();
            hotelService.editHotel(this.hotel, this.id).then((response) => {
                if(response.status != 200) this.$swal.fire('Mensaje', "Error al actualizar el hotel, verifique que el numero de habitaciones no sea inferior a las creadas", 'error');
                else{
                    this.$swal.fire('Mensaje', "El hotel ha sido actualizado", 'success');
                    this.$router.push('/hotel/'+this.id, );
                } 
            });
        },

        getHotel(id) {
            const service = new HotelService();
            service.getHotebyId(id).then((response) => {
                this.hotel = response.data;
            });
        },
    }
};
</script>
