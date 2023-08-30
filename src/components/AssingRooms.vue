<template>
    <div class="card my-3">
        <div class="card-body">
            <h5>Asignar habitaciones</h5>
            <div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            type: {
                id: 0,
                name: ""
            }
        }
    },
    mounted() {
        this.getAllTypes();
    },
    methods: {
        getAllTypes(){
            
        }
    }
}

</script>