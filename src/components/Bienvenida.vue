<script setup>

</script>

<template class="w-full">
     <div class="px-6 py-12 md:px-12 h-screen bg-transparent text-gray-900 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 gap-12 flex items-center">
          <div class="mt-12 lg:mt-0">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Añade perfiles <br /><span class="text-pink-700">de personas </span></h1>
            <a class="inline-block px-7 py-3 mr-2 bg-pink-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-900 hover:shadow-lg focus:bg-pink-950 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-900 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/RegistroPersonas" role="button">Añadir persona</a>
            <a class="inline-block px-7 py-3 bg-transparent text-blue-950 font-bold text-sm leading-snug uppercase rounded hover:text-pink-800 hover:underline hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/ListaPersonas" role="button">Ver registros</a>
          </div>
          <div class="mb-12 lg:mb-0">
            <img
              src="../components/icons/personasux.png"
              class="w-full rounded-lg object-contain"
              alt="personas"
            />
          </div>
        </div>
      </div>
    </div>

</template>