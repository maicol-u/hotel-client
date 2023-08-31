<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Lista de habitaciones</h5>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Acomodacion</th>
                        <th scope="col">Numero habitaciones</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="room in rooms" :key="room.id">
                        <td> {{ room.type.name }} </td>
                        <td> {{ room.accommodation.name }} </td>
                        <td> {{ room.quantity }}</td>
                        <td>
                            <button @click="deleteRoomHotel(room.id)" class="btn btn-danger btn-sm">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import RoomService from '@/services/RoomService';

export default {
    props: {
        rooms: Object,
        getHotelRooms: Function
    },
    methods: {
        deleteRoomHotel(id){
            const roomService = new RoomService();
            roomService.deleteRoomHotel(id).then((response)=>{
                this.$swal.fire('Mensaje', response.message, 'success')
                this.getHotelRooms();
            });
        }
    },
}
</script>