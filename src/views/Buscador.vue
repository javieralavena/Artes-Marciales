<template>

    <div>
        <h1>Buscar un peleador por id</h1>
        <div class="formulario">
            <input type="text" v-model="id" placeholder="Ingrese la ID del peleador a buscar">
            <input type="submit" value="Buscar" @click.prevent="obtenerIdolo(id)">
        </div>

    </div>


</template>

<script>

export default {
    name: 'view-busqueda',
    // props: {},
    data: function () {
        return {
            id: "",
        }
    },
    // computed: {},
    methods: {
        // -- UI Modification
        // -- Data fetching
        // -- Data handling and transformations
        obtenerIdolo() {

            if (this.id == "") {
                alert("Ingrese un valor")

            } else {
                this.$router.push(`/peleadores/${this.id}`)
            }

        },
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.formulario {
    display: grid;
    grid-template-columns: 300px 80px;
    grid-template-rows: 30px;
    gap: 10px;
    justify-content: center;
}
</style>