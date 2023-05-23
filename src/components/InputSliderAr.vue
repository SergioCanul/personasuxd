<script>

export default {
    
    data() {
        return {
            por: '50',
        }
    },
    props:{index:null},
    methods: {
        PasarDato() {
            this.$emit('porc', this.por, this.index)
        }
    }
}
</script>

<template>
                      {{ this.por }}%
            <br>
    <input type="range" v-model="por" class="w-full py-3 rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="por" placeholder="" typeof="slider" min="0" max="100" @input="PasarDato"/>
</template>