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
      mostrarBuscados: false,
      mostrarUno:false,
      nohay:false,

      //para el buscador
      buscar:"",
      buscados:[]
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
    //funcion para buscar personas por id
    buscador(buscar) { 

      //si esta vacio
      if(buscar==""){
        //muestra la lista
        this.mostrarLista= true
        //oculta la tarjeta de buscados
        this.mostrarBuscados = false
        //oculta mensaje no hay
        this.nohay=false
      }
      //sino
      else{
               
        //si es numerico
        if(!isNaN (buscar) === true) {
          //busca en el servidor por url
          API_URL='/api/getPersonasUxd.php?id='+ buscar

          //metodo get
          axios.get(API_URL) 
          //si hay error entonces
          .catch(error => {
            //oculta la card del buscado
            this.mostrarBuscados = false

            //muestra mensaje que no existe el id que busca
            this.nohay = true
          })
          //si no hay errores guarda todo lo que recibe 
          .then((response) => {
            //llamando a los datos del json extraido
            this.buscados = response.data.persona;
            //mostrando buscados en consola
            console.log(this.buscados)
            //mostramos cards buscados
            this.mostrarBuscados = true
            //deshabilitamos mensaje no existe
            this.nohay = false
            console.log(this.nohay)
          })         
        
          //cambiamos a verdadero que recibe por nombre 
          this.nohay=true           
        } 
          
      }
      
    },
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
          this.infUno.estadoCivil= "Soltero"
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
  <div class="bg-transparent h-full">
    <h1 class="text-3xl font-extrabold text-gray-900 text-center">BUSCADOR DE PERSONAS</h1>
  <!--Buscador-->
  <div class="flex justify-center items-center space-x-4 text-base my-2 mx-auto">
    <label class="text-white font-medium">Buscar</label>
    <input class="h-10 px-10 rounded-lg italic" type="text" v-model="buscar" placeholder="Ingrese ID para buscar" @input = "buscador(buscar)">
</div>
    
  <!--Resultados Buscador-->

  <!--si no recibe true en la variable mostrarBuscados
      ENCONTRO VARIOS PERSONAS POR SU ID-->
  <div v-if="mostrarBuscados" class="m-auto w-11/12 mb-5">
   
    <!--Recorre la nueva lista y por cada personaje que encuentra-->    
    
    <!--card de personaje-->
    <!--=========================================================================================================================-->
    <div class="w-12/12 m-auto h-auto rounded-lg bg-gray-50 dark:bg-gray-600 rounded-lg py-8 px-7 mb-5 ">
    
      <div class="grid grid-cols-2 flex-col space-x-3 mx-3 bg-transparent">
      <!--columna 1-->
      <!-- Información general -->
    <div class="w-full mt-6 bg-gradient-to-r from-slate-300 to-gray-200 p-3 rounded-lg">
    <h1 class="text-2xl  text-center font-bold  text-black">INFORMACION GENERAL</h1>

    <h2 class="mb-2 px-3"> <b>Id: </b> {{ buscados.id }}</h2>
    <h2 class="mb-2 px-3"> <b>Nombre:</b> {{ buscados.nombre }}<b class="pl-6">Edad:</b> {{ buscados.edad}} </h2>
    <h2 class="mb-2 px-3"> <b>Ocupación:</b> {{ buscados.trabajo }} <b class="pl-2">Estado Civil:</b> {{ buscados.estadoCivil}}</h2>
    <h2 class="mb-2 px-3"> <b>Lugar de residencia:</b> {{ buscados.residencia}}</h2>
    <h2 class="mb-3 px-3 font-bold text-black">Frase o cita con la que se identifica:</h2>
    <h2 class="mb-2 px-6 italic">"{{ buscados.cita}}"</h2>
    <h2 class="mb-6 px-6 font-medium">  - {{ buscados.citaAutor}}</h2>
    <h4 class="mb-6 px-3"> <b>Biografia:</b> <br>{{ buscados.bio}}</h4>
  </div>
          <!--Columna 2-->
          <!-- Informacion Personal -->
          <div class="w-full mt-6 bg-gradient-to-r from-slate-300 to-gray-200 p-3 rounded-lg">
          <h1 class="text-2xl  text-center font-bold  text-black">INFORMACION PERSONAL</h1>

            <!--Objetivos-->
              <h4 class="text-base font-bold text-black">Objetivos:</h4>
              <!-- recorro array de objetivos y llamo a index -->
              <div class="mt-4 mx-auto px-3" v-for="o,index in buscados.objetivos">
                <h4 class="mb-1 px-3"><b class="font-bold">•  </b>{{ o.objetivo }}.</h4>

              </div>
            
            <!--Frustraciones-->
              <h1 class="text-base font-bold text-black">Frustraciones:</h1>
              <!-- recorro array de frustraciones y llamo a index -->
              <div class="mt-4 mx-auto px-3" v-for="f,index in buscados.frustraciones">
                <h2 class="mb-1 px-3"><b class="font-bold">•  </b>{{  f.frustracion }}</h2>

              </div>
              <!--Marcas Preferidas-->
              <h1 class="text-base font-bold text-black">Marcas preferidas:</h1>
              <!-- recorro array de frustraciones y llamo a index -->
              <div class="mt-4 mx-auto px-3" v-for="m,index in buscados.marcas">
                <h2 class="mb-1 px-3"><b class="font-bold">•  </b>{{  m.marca }}</h2>

              </div>
         </div> 
      </div>
      
      <!--columna 1-->
    <div class="grid grid-cols-2 flex-col space-x-3 mx-3 bg-transparent">
      <div class="w-full mt-4 bg-gradient-to-r from-sky-500 to-sky-400 p-3 rounded-md">
          <h1 class="text-2xl  text-center font-bold  text-white">Personalidad</h1>

          <div class="w-full mt-4 mx-auto px-3 ">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Orientación Social  
                <br>
            </label>

            <div class="flex  justify-between px-4">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Extrovertido: <br>  {{buscados.personalidad01 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Introvertido: <br> {{ 100 - buscados.personalidad01}}%
              </label>
            </div>

            <div class=" px-4">
            <input type="range" v-model="buscados.personalidad01" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
              <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                  Forma de percepción  
                  <br>
              </label>

              <div class="flex  justify-between px-4">
                <label class="text-white  text-left md:text-left my-2 md:mb-0">
                  Sensorial (Concreta): <br>  {{buscados.personalidad02 }}%
                </label>
                
                <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                  Intuitiva: <br> {{ 100 - buscados.personalidad02}}%
                </label>
              </div>
              <div class=" px-4">
              <input type="range" v-model="buscados.personalidad02" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
              </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Enfoque en toma de decisiones  
                <br>
            </label>

            <div class="flex  justify-between px-4">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Logico: <br>  {{buscados.personalidad03 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Emocional: <br> {{ 100 - buscados.personalidad03}}%
              </label>
            </div>
            <div class=" px-3">
            <input type="range" v-model="buscados.personalidad03" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>

          </div>

          <div class="w-full mt-4 mx-auto px-3">
            <label class=" text-white font-bold md:text-left my-2 md:mb-0">
                Estilo de vida  
                <br>
            </label>

            <div class="flex  justify-between px-3">
              <label class="text-white  text-left md:text-left my-2 md:mb-0">
                Juicio<br>(Planificado): <br>  {{buscados.personalidad04 }}%
              </label>
              
              <label class="text-white  text-end  mr-0 md:text-right my-2 md:mb-0">
                Percepción<br>(Flexible): <br> {{ 100 - buscados.personalidad04}}%
              </label>
            </div>
            <div class=" px-3">
            <input type="range" v-model="buscados.personalidad04" class="w-full -3 py-3 mx-auto rounded-lg transition-colors bg-gray-100 focus:shadow focus:bg-white focus:outline-none" id="porcentaje" placeholder="" typeof="slider" min="0" max="100"/>
            </div>
          </div>
        </div>

    <!--columna 2-->
    <div class="w-full mt-4 bg-gradient-to-r from-pink-600 to-pink-500 p-3 rounded-md">
          
          <h1 class="text-2xl  text-center font-bold  text-white">Motivaciones</h1>
          
          <!-- recorro cada dato del array de motivaciones y llamo a index -->
          <div class="w-full mt-3 mx-auto px-3" v-for="m,index in buscados.motivaciones">
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
    </div>
  </div>

<!--================================================================================================================================-->
  
  <!--si no existe el id buscado-->
  <div v-if="nohay" class="mx-auto">

    <!--Muestra mensaje de no existe-->
    <h1 class="text-center text-white text-medium text-xl my-5">
      No se han encontrado coincidencias
    </h1>

  </div>
</div>
</template>