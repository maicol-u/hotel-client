<template>
    <div class="card my-3">
        <div class="card-body">
            <h5>Asignar habitaciones</h5>
            <div>
                <form class="justify-content-start flex-wrap" @submit.prevent="submitForm">
                    <div class="d-flex">
                        <div class=" m-2 d-flex">
                            <label for="type" class="pe-2 col-form-label">Tipo</label>
                            <select name="type" class="form-select" v-on:change="typeChange" v-model="room.type_id"
                                required>
                                <option value="">Seleccione</option>
                                <option v-for="typei in types" :key="typei.id" :value="typei.id">
                                    {{ typei.name }}
                                </option>

                            </select>
                        </div>

                        <div class=" m-2 d-flex">
                            <label for="accommodation" class="pe-2 col-form-label">Acomodaciones</label>
                            <select name="accommodation" class="form-select" v-model="room.accommodation_id" required>
                                <option value="">Seleccione</option>
                                <option v-for="accomodation in accomodations" :key="accomodation.id"
                                    :value="accomodation.id">
                                    {{ accomodation.name }}
                                </option>

                            </select>
                        </div>
                        <div class=" m-2 d-flex">
                            <label for="accommodation" class="pe-2 col-form-label">Habitaciones</label>
                            <input type="number" name="number_rooms" id="" class="form-control"
                                placeholder="Cantidad de habitaciones" min="0" v-model="room.quantity" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success ms-3">Guardar</button>
                </form>
            </div>
        </div>
    </div>
    <div>
        <RoomsHotelList :rooms="this.rooms" :getHotelRooms="getHotelRooms"/>
    </div>
</template>

<script>
import TypeService from '@/services/TypeService';
import AccomodationService from '@/services/AccommodationService';
import RoomService from '@/services/RoomService';
import RoomsHotelList from './RoomsHotelList.vue';

export default {
    components: { RoomsHotelList },
    props: ['hotel_id'],
    data() {
        return {
            types: [],
            accomodations: [],
            typeService: [],
            roomService: [],
            acomService: [],
            room: {
                quantity: "",
                hotel_id: "",
                type_id: "",
                accommodation_id: ""
            },
            rooms: []
        }
    },
    
    mounted() {
        this.typeService = new TypeService();
        this.acomService = new AccomodationService();
        this.roomService = new RoomService();
        this.getAllTypes();
        this.getHotelRooms();
        
    },
    methods: {
        async getAllTypes() {
            this.typeService.getAllTypes().then((response) => {
                this.types = response.data;
            });
        },

        async typeChange(event) {
            this.room.accommodation_id = "";
            this.acomService.getAccomodationsForType(event.target.value).then((response) => {
                this.accomodations = response.data;
            });
        },

        submitForm() {
            this.room.hotel_id = this.hotel_id;
            this.saveRoom(this.room);
        },

        saveRoom(room) {
            this.roomService.saveRoomByHotel(room).then((response) => {
                if (response.message == 'Room was created'){
                    this.$swal.fire('Mensaje', "Tipo de habitacion creada", 'success');
                    this.getHotelRooms();
                } else this.$swal.fire('Mensaje', response.message, 'error');
            });
        },

        getHotelRooms() {
            
            this.roomService.getRoomsByHotel(this.hotel_id).then((response) => {
                this.rooms = response.data;
            });
        }
    }
}

</script>