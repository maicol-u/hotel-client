<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand nav-title">Hoteles</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/nuevo-hotel" class="nav-link">Huevo hotel</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavigationHome',
}
</script>

<style>
.nav-title {
    color: #42b983;
}
</style>