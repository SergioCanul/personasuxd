<script>

export default {
    
    data() {
        return {
            datosAr: '',
        }
    },
    props:{index:null},
    methods: {
        //Funcion para hacer un emit
        PasarDato() {
            
            this.$emit('dataA',this.datosAr,this.index)
        }
    }
}
</script>

<template>
    <input type="text" v-model="datosAr" name="dataA" id="dataA" class="w-full my-2 py-2.5 px-4 opacity-70 rounded-md bg-gray-50 focus:shadow focus:bg-white focus:outline-none" @input="PasarDato"/>
</template>