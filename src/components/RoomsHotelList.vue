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
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        rooms: Object
    }
}
</script>