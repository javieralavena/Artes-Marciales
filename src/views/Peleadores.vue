<template>

    <div>
        <h1>Peleadores</h1>
        <div class="lista-peleadores">
            <ul>

                <li v-for="peleador in peleadores" :key="peleador.id" @click="encontrarPeleador(peleador.id)">

                    <a>{{ peleador.nombre }} </a>

                </li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
    name: 'view-peleadores',
    // props: {},
    data: function () {
        return {
            peleadores: []
        }
    },
    computed: {

    },
    methods: {
        // -- UI Modification
        // -- Data fetching
        async obtenerIdolo() {
            try {
                const path = process.env.NODE_ENV === "production" ? "/Artes-Marciales/" : "/"
                let data = await fetch(`${path}peleadores.json`)
                if (!data.ok) throw ('Error en petición')

                let json = await data.json()

                this.peleadores = json

                console.log(this.peleadores)
            }
            catch (error) {
                console.log(error)
            }
        },
        encontrarPeleador(id) {
            this.$router.push(`/peleadores/${id}`);
        }
        // -- Data handling and transformations
        // -- Validations and Error handling
        // -- Other functions
        // -- Vuex mappings
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.obtenerIdolo()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.lista-peleadores {
    display: grid;
    justify-content: center;
    text-align: left;
}

a {
    color: blue;
    text-decoration: underline;
    font-weight: bold;
}
</style>