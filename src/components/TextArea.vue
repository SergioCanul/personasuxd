<script>

export default {
    
    data() {
        return {
            datoTA: '',
        }
    },
    methods: {
        //Funcion para hacer un emit
        PasarDato() {
            
            this.$emit('dataTA',this.datoTA)
        }
    }
}
</script>

<template>
    
    <textarea type="text" v-model="datoTA" class="w-full py-2.5 px-4 opacity-70 rounded-md bg-gray-50 focus:shadow focus:bg-white focus:outline-none" id="TextArea" rows="5" @input="PasarDato">
    </textarea>

</template>