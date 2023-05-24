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
    mounted() {
    },
    methods: {

        //Funciones para pasar los datos que recibe como componentes a las variables declaradas
        //Nombre
        DataIT1(t){
          this.Nombre=t //asignacion de lo que recibira la variable
        },

        //Edad
        DataIT2(t){
          this.Edad=t
        },

        //Trabajo
        DataIT3(t){
          this.Trabajo=t
        },

        //Residencia
        DataIT4(t){
          this.Residencia=t
        },

        //Cita
        TextAreaC(a){
          this.Cita=a
        },

        //Biografia
        TextAreaB(a){
          this.Bio=a
        },

        //Personalidades
        SliderP1(s){
          this.Personalidad1=s
        },

        SliderP2(s){
          this.Personalidad2=s
        },

        SliderP3(s){
          this.Personalidad3=s
        },

        SliderP4(s){
          this.Personalidad4=s
        },

        //Objetivos
        Objetivoos(s, index){
          this.ArrayObjetivos[index] = {value: s}
          
        },
        //Frustraciones
        Frustracionees(s, index){
          this.ArrayFrustraciones[index] = {value: s}
          
        }, 
        //Motivaciones
        MotivacionesText(s, index) {
            this.ArrayMotivaciones[index] = { value: s , porcentaje: this.ArrayMotivaciones[index].value }
            console.log(this.ArrayMotivaciones)
        },
        MotivacionesVal(s, index) {
          this.ArrayMotivaciones[index] = { value: this.ArrayMotivaciones[index].value , porcentaje: s }
          console.log(this.ArrayMotivaciones)  
        },

        //Función para enviar informacion de una persona
        Registro() {
          if(this.Validar()){
            axios
              .post("/api/guardarPersonasUxd.php", {
              //declaracion de variables del backend
              nombre: this.Nombre,
              edad: this.Edad,
              estadoCivil: this.EstadoCivil,
              trabajo: this.Trabajo,
              residencia: this.Residencia,
              cita: this.Cita,
              citaAutor: this.CitaAutor,
              bio: this.Bio,
              personalidad01: this.Personalidad1,
              personalidad02: this.Personalidad2,
              personalidad03: this.Personalidad3,
              personalidad04: this.Personalidad4,
              objetivos: this.ArrayObjetivos,
              frustraciones: this.ArrayFrustraciones,
              motivaciones: this.ArrayMotivaciones,
              marcas: this.Marcas
            })
            .then((response) => {
            //comprobación de envio a la base de datos con numero 200
            console.log(response.status);
            });
          }
            
        },

        Validar(){
          //nombre
          if(this.Nombre != "" && !isNaN (this.Nombre) === false && this.Nombre.length <201 && this.Nombre.length > 2 ) {
            console.log("el nombre es correcto")
             
            //edad
            if (this.Edad.length < 3 && this.Edad != ""){
              console.log("edad existe")
            }else{
              console.log("no existe esa edad")
            }

            //Estado civil
            if (this.EstadoCivil != ""){
              console.log("si selecciono estado civil")
            }else{
              console.log("no selecciono estado civil")
              return false
            }

            //Trabajo
            if (this.Trabajo.length < 201 && this.Trabajo != "" && !isNaN (this.Trabajo) === false){
              console.log("trabajo existe")
            }else{
              console.log("no existe trabajo")
              return false
            }

            //Residencia
            if (this.Residencia.length < 201 && this.Residencia != "" && !isNaN (this.Residencia) === false){
              console.log("residencia existe")
            }else{
              console.log("no existe residencia")
              return false
            }

            //Cita
            if (this.Cita.length < 501 && this.Cita != "" && !isNaN (this.Cita) === false){
              console.log("Cita existe")
            }else{
              console.log("Cita no existe")
              return false
            }

            //CitaAutor
            if (this.CitaAutor.length < 501 && this.CitaAutor != "" && !isNaN (this.CitaAutor) === false){
              console.log("CitaAutor existe")
            }else{
              console.log("CitaAutor no existe")
              return false
            }

            //Bio
            if (this.Bio.length < 701 && this.Bio != ""){
              console.log("Bio correcta")
            }else{
              console.log("Bio incorrecta")
              return false
            }

            //Objetivos
            if ( this.ArrayObjetivos  != ""){
              console.log("Objetivo correcto")
            }else{
              console.log("Objetivo incorrecto")
              return false
            }

            //Frustraciones
            if ( this.ArrayFrustraciones  != ""){
              console.log("Frustraciones correcto")
            }else{
              console.log("Frustraciones incorrecto")
              return false
            }

            //Motivaciones
            if ( this.ArrayMotivaciones  != ""){
              console.log("Motivaciones correcto")
            }else{
              console.log("Motivaciones incorrecto")
              return false
            }

          return true
                       
          }
          else{
            console.log("No pude registrarlo")
            return false
          }
          
        }
    },
    
}


</script>

<template>
<div class="bg-gradient-to-r from-slate-500 to-gray-400 h-full">

<h1 class="text-4xl px-5 my-5 font-extrabold text-gray-900 text-center">REGISTRO DE PERSONAS</h1>
<h3 class="text-xl px-5 my-5 font-semibold text-white text-center">Llena los campos solicitados para registrar una persona nueva</h3>

<div class="w-full h-full bg-transparent flex justify-item-center">
    
    <div class="w-10/12 w-450 m-auto h-auto rounded-lg bg-gray-50 dark:bg-gray-600 py-8 px-7 mb-5">

      <form class="w-full mt-6">
        
        <div class="grid grid-cols-3">
          <!--COLUMNA 1-->
          <div class=" bg-amber-300  p-3 rounded-lg">
            <div class="w-full">
              <h1 class="text-2xl  text-center font-bold  text-black ">INFORMACION GENERAL</h1>
              <h3 class="text-md  text-center font-semibold  text-white ">Agrega tu informacion basica en los siguientes espacios</h3>
              
              <!-- Nombre -->
              <label class="block text-black font-medium  md:text-left my-2 md:mb-0">
                Nombre:
              </label>
              
              <!--Uso al componente-->
              <InputText @dataIT="DataIT1" > </InputText>
            
            </div>

            <!-- Edad -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0" >
                Edad:
              </label>
              
              <!--Uso al componente-->
              <InputText @dataIT= "DataIT2" > </InputText>

            </div>

            <!-- Estado Civil -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Estado Civil:
              </label>
              <select v-model="EstadoCivil" name="EstadoCivil" id="EstadoCivil"  class="w-full my-2 py-2.5 px-4 opacity-80 rounded-md bg-gray-50 focus:shadow focus:bg-white focus:outline-none">
                <option disabled value="">Selecciona tu estado civil actual </option>
                <option value="1">Soltero</option>
                <option value="2">Casado </option>
                <option value="3">Divorciado</option>
                <option value="4">Separado</option>
                <option value="5">Unión libre</option>
                <option value="6">Viudo</option>
              </select>
            </div>

            <!-- Trabajo -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Ocupacion ó trabajo:
              </label>
              
              <!--Uso al componente-->
              <InputText @dataIT= "DataIT3" > </InputText>
            </div>

            <!-- Residencia -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Lugar donde recide:
              </label>
              
              <!--Uso al componente-->
              <InputText @dataIT= "DataIT4"> </InputText>

            </div>

            <!-- Cita -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Escribe una cita o frase (de peliculas, anime, libros u otros) que te represente:
              </label>
              
              <!--Uso al componente-->
              <TextArea @dataTA = "TextAreaC"></TextArea>
            </div>

            <!-- Autor -->
            <div class="w-full mt-4">
              <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Autor de la cita o frase escrita en el apartado anterior
              </label>
              <input type="text" v-model="CitaAutor" class="w-full py-2.5 px-4 rounded-md bg-gray-50 opacity-70 focus:shadow focus:bg-white focus:outline-none" id="CitaAutor" placeholder=""/>
            </div>


          </div>
          <!--COLUMNA MEDIA-->
          
          <div class=" ml-5 bg-pink-500  p-3 rounded-lg">
            <div class="w-full">
              <h1 class="text-2xl  text-center font-bold  text-black ">INFORMACION PERSONAL</h1>
              <h3 class="text-md  text-center font-semibold  text-white ">Cuentanos un poco mas acerca de ti llenando los siguiente </h3>
              </div>
             <!-- Biografia -->
              <div class="w-full mt-4">
                <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Biografía:
                </label>
              
              <!--Uso al componente-->
              <TextArea @dataTA = "TextAreaB"></TextArea>

            </div>

              <!-- Objetivos -->
              <div class="w-full mt-4">
                <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                Objetivos:
                </label>
              <div v-for="(obj, index) in ArrayObjetivos">
                <InputArray @dataA="Objetivoos" :index="index"> </InputArray>
              </div>
              <BotonEnviar v-on:click.prevent="this.ArrayObjetivos.push(NuevoObje)"> + </BotonEnviar>
            </div>

              <!-- Frustraciones  --> 
              <div class="w-full mt-4">
                <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                  Frustraciones:   
                </label>
                <div v-for="(frus, index) in ArrayFrustraciones">
                  <InputArray @dataA="Frustracionees" :index="index"> </InputArray>
                </div>
              <BotonEnviar v-on:click.prevent="this.ArrayFrustraciones.push(NuevoFrus)"> + </BotonEnviar>
              </div>

             <!-- Marcas -->
              <div class="w-full mt-4">
                <label class="block text-black font-medium md:text-left my-2 md:mb-0">
                  Tus marcas preferidas:
                </label>
                <input type="text" v-model="Marcas" class="w-full py-2.5 px-4 opacity-70 rounded-md bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="Marcas" placeholder="Separa cada marca con comas"/>
              </div>

          </div>
          
          <!--COLUMNA 3-->
          <!-- Personalidades  -->
          <div class="ml-5 bg-cyan-400 p-3 rounded-lg w-full ">

            <h1 class="text-2xl  text-center font-bold  text-black">PERSONALIDAD</h1>
            <h3 class="text-md  text-center font-semibold  text-white ">Dejanos conocer sobre tu personalidad mediante los siguientes criterios </h3>

            <div class="w-full mt-4">
              <label class="block text-black font-bold md:text-left my-2 md:mb-0">
                Orientación Social  
                <br>
              </label>

              <div class="flex justify-between px-3  ">
                <label class="text-black  text-left md:text-left my-2 md:mb-0">
                  Extrovertido: <br> {{ this.Personalidad1 }}%
                </label>
                
                <label class="text-black  text-end  mr-0 md:text-right my-2 md:mb-0">
                  Introvertido: <br> {{ 100 - this.Personalidad1 }}%
                </label>

              </div>

              <!--Uso al componente-->
              <InputSlider @porcentaje="SliderP1" ></InputSlider>
            
            </div>
            
            <div class="w-full mt-4">

              <label class="block text-black font-bold md:text-left my-2 md:mb-0">
                Forma de Percepción 
              </label>

              <div class="flex justify-between px-3  ">
                <label class="text-black text-left md:text-left my-2 md:mb-0">
                  Sensorial (Concreta): <br>  {{ this.Personalidad2 }}%
                </label>
                
                <label class="text-black text-end  mr-0 md:text-right my-2 md:mb-0">
                  Intuitiva: <br> {{ 100 - this.Personalidad2 }}%
                </label>

              </div>

              <!--Uso al componente-->

              <InputSlider @porcentaje="SliderP2" ></InputSlider>
            </div>
            
            <div class="w-full mt-4">
              <label class="block text-black font-bold md:text-left my-2 md:mb-0">
                Enfoque en toma de decisiones
              </label>

              <div class="flex justify-between px-3  ">
                <label class="text-black text-left md:text-left my-2 md:mb-0">
                  Logico: <br>  {{ this.Personalidad3 }}%
                </label>
                
                <label class="text-black text-end  mr-0 md:text-right my-2 md:mb-0">
                  Emocional: <br> {{ 100 - this.Personalidad3 }}%
                </label>

              </div>

              <!--Uso al componente-->
              <InputSlider @porcentaje="SliderP3" ></InputSlider>
              
            </div>
            
            <div class="w-full mt-4">
              <label class="block text-black font-bold md:text-left my-2 md:mb-0">
                Estilo de vida
              </label>

              <div class="flex justify-between px-3  ">
                <label class="text-black text-left md:text-left my-2 md:mb-0">
                  Juicio (Planificado): <br>  {{ this.Personalidad4 }}%
                </label>
                
                <label class="text-black text-end  mr-0 md:text-right my-2 md:mb-0">
                  Percepción (Flexible): <br> {{ 100 - this.Personalidad4 }}%
                </label>

              </div>

              
      </form> 
    </div>
    
  </div> 
</div>
</template>