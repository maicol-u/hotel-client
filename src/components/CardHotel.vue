<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ hotel.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ hotel.city }}</h6>
                <p class="card-text">{{ hotel.number_rooms }} habitaciones</p>
                <div class="fw-light fs-5">
                    Ver detalles
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    props: {
        hotel: Object
    }
};
</script>
  