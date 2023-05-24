<script>
//importación de componentes
import BotonEnviar from '../components/BotonEnviar.vue';
import InputText from '../components/InputText.vue';
import TextArea from '../components/TextArea.vue';
import InputSlider from '../components/InputSlider.vue';
import InputArray from '../components/InputTextArray.vue';
import InputSliderAr from '../components/InputSliderAr.vue';

import axios from 'axios';



export default {
  components:{
    BotonEnviar, InputText, TextArea, InputSlider, InputArray, InputSliderAr
  },
  
  emits: ['dataIT, dataTA, porcentaje, dataA, porc'],

    data() {
      return {
        //variables que va recibir
        Nombre: "",
        Edad: "",
        EstadoCivil: "",
        Trabajo: "",
        Residencia: "",
        Cita: "",
        CitaAutor: "",
        Bio: "",
        Personalidad1: "50",
        Personalidad2: "50",
        Personalidad3: "50",
        Personalidad4: "50",

        NuevoObje: "",
        ArrayObjetivos: [{value:''}],
        
        NuevoFrus: "",
        ArrayFrustraciones: [{value:''}],

        NuevoMot: "",
        ArrayMotivaciones: [{ value: '', porcentaje: '' }],

        Marcas: "",

        //variable validaciones
        validar:false
      };
    },
      