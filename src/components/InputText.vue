<script>

export default {
    
    data() {
        return {
            datoIT: '',
        }
    },
    methods: {
        //Funcion para hacer un emit
        PasarDato() {
            
            this.$emit('dataIT',this.datoIT)
        }
    }
}
</script>

<template>
    <input type="text" v-model="datoIT" name="dataIT" id="dataIT" class="w-full py-2.5 px-4 opacity-70 rounded-md bg-gray-50 focus:shadow focus:bg-white focus:outline-none" @input="PasarDato"/>
</template>
