<script>

export default {
    
    data() {
        return {
            porcentaje: 50
        }
    },
    props:{index:null},
    methods: {
        PasarDato() {
            this.$emit('porcentaje', this.porcentaje, this.index)
        }
    }
}
</script>

<template>
    <input type="range" v-model="porcentaje" class="w-full py-3 rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100" @change="PasarDato"/>
</template>