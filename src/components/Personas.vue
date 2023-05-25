<script>
import axios from 'axios'

let API_URL = '/api/getPersonasUxd.php'

export default {

  data() {
    return {
      //variables de retorno  
      //para lista de personas
      personas: [],
      infoUno: [],


      //para ocultar y mostrar
      mostrarLista: true,
      mostrarUno:false,
    }
  },
  mounted() {
    axios
      .get(API_URL)
        .then((response) => {
        
        //lista como en el json
        this.personas = response.data.personas
        console.log (this.personas)
    })
    
  },
  methods: {
    //informacion de una persona
    InfoPer(id) {     
      //url de consumo API
      API_URL='/api/getPersonasUxd.php?id='+id 
      console.log(API_URL)

      //lo obtiene
      axios.get(API_URL)

      //tomamos la respuesta
      .then((response) => {
        console.log(response) //regresa datos de una sola persona
        //contiene el array de cada persona con sus datos
        this.infoUno = response.data.persona;
        if (this.infoUno.estadoCivil== 1){
          this.infoUno.estadoCivil= "Soltero"
        }
        if (this.infoUno.estadoCivil== 2){
          this.infoUno.estadoCivil= "Casado"
        }
        if (this.infoUno.estadoCivil== 3){
          this.infoUno.estadoCivil= "Divorciado"
        }
        if (this.infoUno.estadoCivil== 4){
          this.infoUno.estadoCivil= "Separado"
        }
        if (this.infoUno.estadoCivil== 5){
          this.infoUno.estadoCivil= "Unión libre"
        }
        if (this.infoUno.estadoCivil== 6){
          this.infoUno.estadoCivil= "Viudo"
        }
        console.log(this.infoUno)
         
      })

      //el id incrementa
      this.id++
      //cambiamos el valor por verdadero para que lo muestre
      this.mostrarUno=true
      //console.log(this.mostrarUno)
       
    },
  }

}
</script>

<template>
<!--TABLA-->
  <!--Recorre la nueva lista y por cada personaje que encuentra-->    
  <div class="grid grid-cols-2 mx-auto p-1 rounded-lg bg-transparent h-full">

    <h1 class="text-center text-gray-900 text-3xl font-extrabold my-4"> PERSONAS REGISTRADAS</h1><br>
    
    <div class="text-2xl text-white mx-auto border-separate " >
        
        <table class = "text-base mx-auto text-center">
          <thead >
            <tr class="bg-amber-400 text-gray-900">
              <th class=" border-b-4 mx-2 py-2 px-2">Id</th>
              <th class=" border-b-4 mx-2 py-2 px-2">Nombre</th>
              <th class=" border-b-4 mx-2 py-2 px-2">Edad</th>
              <th class=" border-b-4 mx-2 py-2 px-2">Ocupación</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in personas">
              <td class=" bg-sky-600 border-b-4 mx-2 py-2 px-2 ">  {{ index += 1 }} </td>
              <td class=" bg-gray-700 border-b-4 mx-2 py-2 px-2">{{ p.nombre }}</td>
              <td class=" bg-gray-700 border-b-4 mx-2 py-2 px-2">{{ p.edad }}</td>
              <td class=" bg-gray-700 border-b-4 py-2 px-2">{{ p.trabajo }}</td>
              <td> <button class="h-8 mx-2 sm:h-10 px-3 font-normal rounded-md bg-pink-800 hover:bg-pink-600 text-white my-1 justify-center shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" type="button" @click="InfoPer(p.id)"> Ver </button> </td>
            </tr>
            
          </tbody>
        </table>

    </div>

    <!--Informacion sólo Uno-->
    <div class=" py-15 "  v-if="mostrarUno">
      
      <!--card de info-->
      <div class="w-11/12 mx-auto px-5 py-5 bg-gray-50 dark:bg-gray-600 rounded-lg">

        <!-- Información general -->
        <div class="w-full mt-6 bg-gradient-to-r from-slate-300 to-gray-200  rounded-lg">
          <h1 class="text-2xl  text-center font-bold  text-black">INFORMACION GENERAL</h1>
      
          <h2 class="mb-2 px-3"> <b>Id: </b> {{ infoUno.id }}</h2>
          <h2 class="mb-2 px-3"> <b>Nombre:</b> {{ infoUno.nombre }}<b class="pl-6">Edad:</b> {{ infoUno.edad}} <b class="pl-6">Ocupación:</b> {{ infoUno.trabajo }}</h2>
          <h2 class="mb-2 px-3"> <b>Estado Civil:</b> {{ infoUno.estadoCivil}} <b class="pl-8">Lugar de residencia:</b> {{ infoUno.residencia}}</h2>
          <h2 class="mb-3 px-3 font-bold text-black">Frase o cita con la que se identifica:</h2>
          <h2 class="mb-2 px-6 italic">"{{ infoUno.cita}}"</h2>
          <h2 class="px-6 font-medium">  - {{ infoUno.citaAutor}}</h2>
          <br>
        </div>

        <!-- Informacion Personal -->
        <div class="w-full mt-4 bg-gradient-to-r from-slate-300 to-gray-200 rounded-lg">
          <h1 class="text-2xl  text-center font-bold  text-black">INFORMACION PERSONAL</h1>
          <h4 class="mb-6 px-3"> <b>Biografia:</b> <br>{{ infoUno.bio}}</h4>
          
          <div class="grid grid-cols-2">
            <!--columna 1-->
            <div class="px-3">
              <h4 class="text-base font-bold text-black">Objetivos:</h4>
          
              <!-- recorro array de objetivos y llamo a index -->
              <div class="mt-4 mx-auto px-3" v-for="o,index in infoUno.objetivos">

                <label class=" text-black font-bold md:text-left my-2 md:mb-0">
                  # 0{{index +1 }}:
                  <br>
                </label>

                <h4 class="mb-1 px-3">{{ o.objetivo }}.</h4>

              </div>
            </div>
            <!--columna 2-->
            <div>
              <h1 class="text-base font-bold text-black">Frustraciones:</h1>
          
              <!-- recorro array de frustraciones y llamo a index -->
              <div class="mt-4 mx-auto px-3" v-for="f,index in infoUno.frustraciones">

                <label class=" text-black font-bold md:text-left my-2 md:mb-0">
                # 0{{index +1 }}:
                <br>
                </label>

                <h4 class="mb-1 px-3">{{ f.frustracion }}</h4>

              </div>
            </div>
          </div>
          <br>
          <h1 class="text-base  text-center font-bold  text-black">Marcas preferidas</h1>
          
          <!-- recorro array de frustraciones y llamo a index -->
          <div class="w-full mt-4 mx-auto px-3 text-center" v-for="m,index in infoUno.marcas">
            <h4 class="mb-1 px-3"><b class="font-bold">• </b>{{  m.marca }}</h4>

          </div>
          <br>
        </div>
        <!--columna 1-->
      <div class="grid grid-cols-2 space-x-2 text-center">
        <!-- Personalidades-->
        <div class="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-md px-3">
          <h1 class="text-2xl  text-center font-bold  text-white">Personalidad</h1>

          <div class="w-full mt-4 mx-auto px-3 ">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Orientación Social  
                <br>
            </label>

            <div class="flex  justify-between px-4">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Extrovertido: <br>  {{infoUno.personalidad01 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Introvertido: <br> {{ 100 - infoUno.personalidad01}}%
              </label>
            </div>

            <div class=" px-4">
            <input type="range" v-model="infoUno.personalidad01" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
              <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                  Forma de percepción  
                  <br>
              </label>

              <div class="flex  justify-between px-4">
                <label class="text-white  text-left md:text-left my-2 md:mb-0">
                  Sensorial<br>(concreta): <br>  {{infoUno.personalidad02 }}%
                </label>
                
                <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                  Intuitiva: <br> {{ 100 - infoUno.personalidad02}}%
                </label>
              </div>
              <div class=" px-4">
              <input type="range" v-model="infoUno.personalidad02" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
              </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Enfoque en toma de decisiones  
                <br>
            </label>

            <div class="flex  justify-between px-4">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Logico: <br>  {{infoUno.personalidad03 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Emocional: <br> {{ 100 - infoUno.personalidad03}}%
              </label>
            </div>
            <div class=" px-3">
            <input type="range" v-model="infoUno.personalidad03" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Estilo de vida  
                <br>
            </label>

            <div class="flex  justify-between px-3">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Juicio<br>(Planificado): <br>  {{infoUno.personalidad04 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Percepción<br>(Flexible): <br> {{ 100 - infoUno.personalidad04}}%
              </label>
            </div>
            <div class=" px-3">
            <input type="range" v-model="infoUno.personalidad04" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>

          </div>
        </div>

        <!--Columna 2-->
        <!-- Motivaciones -->
        <div class="w-full mt-4 bg-gradient-to-r from-pink-600 to-pink-500 p-3 rounded-md">
          
          <h1 class="text-2xl  text-center font-bold  text-white">Motivaciones</h1>
          
          <!-- recorro cada dato del array de motivaciones y llamo a index -->
          <div class="w-full mt-3 mx-auto px-3" v-for="m,index in infoUno.motivaciones">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Motivación {{ index +1 }}:
                <br>
            </label>
            <!--Nombre motivacion-->
            <h4 class="mb-1 px-4 text-white">{{ m.motivacion }} </h4>

            <div class=" px-4">
            <!--Porcentaje motivacion-->
            <input type="range" v-model="m.porcentaje" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-blue-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>

          </div>

          </div>
        </div>
      </div>
      <br>
      </div>

    </div>
    <div class="py-15"  v-else="mostrarUno">
    <h1 class="font-bold text-white text-center item-center">
      NO HAY ELEMENTOS PARA MOSTRAR
    </h1>
    </div>
        
  </div>

 
</template>