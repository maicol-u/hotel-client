<template>
    <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">{{ hotel.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ hotel.city }}</h6>
            <p class="card-text"><strong>Dirección:</strong> {{ hotel.address }}</p>
            <p class="card-text"><strong>Teléfono:</strong> {{ hotel.phone }}</p>
            <p class="card-text"><strong>Número de Habitaciones:</strong> {{ hotel.number_rooms }}</p>
            <p class="card-text"><strong>NIT:</strong> {{ hotel.nit }}</p>
            <div class="btn-group">
                <button class="btn btn-primary" @click="editHotel">Editar</button>
                <button class="btn btn-danger" @click="confirmDeleteHotel">Eliminar</button>
            </div>
        </div>
    </div>
    <div>
        <AssingRooms :hotel_id="id" />
    </div>
    
</template>
  
<script>
import HotelService from '@/services/HotelService';
import AssingRooms from "@/components/AssingRooms.vue";

export default {
    components: {
        AssingRooms
    },
    data() {
        return {
            id: 0,
            hotel: []
        }
    },
    created(){
        this.id = this.$route.params.id
    },
    mounted() {
        this.getHotel(this.id)
    },
    methods: {
        async getHotel(id) {
            const service = new HotelService();
            service.getHotebyId(id).then((response) => {
                this.hotel = response.data;
            });
        },
        confirmDeleteHotel() {
            this.$swal.fire({
                title: 'Seguro?',
                text: "Se eliminará el hotel",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, borrar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteHotel(this.id)
                }
            })
        },

        deleteHotel(id) {
            const service = new HotelService();
            service.deleteHotel(id).then((response) => {
                if (response.status == 200){
                    this.$swal.fire('Mensaje', "Hotel Eliminado", 'success')
                    this.$router.push({ name: 'home' });
                } else this.$swal.fire('Mensaje', "No se puede elimiar este hotel, intente borrar primero sus habitaciones", 'error')
            });
        },

        editHotel() {
            this.$router.push({name: 'hotel-edit'});
        }
    }
};
</script>