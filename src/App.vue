<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template class="flex-col justify-center bg-blue-100 w-full h-full p-2">

  <div class="w-full h-full bg-gradient-to-r from-slate-500 to-gray-400 justify-items-center">
      
      <header>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/"  class="flex items-center">
            <img src="../src/assets/logopersona.svg" class="h-8 mr-3" alt="logo" />
            <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-pink-700">PERSONAS UX</span>
        </a>
    </div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:text-amber-400 hover:underline" to="/">Inicio</RouterLink>
                </li>
                <li>
                    <RouterLink class="text-gray-900 dark:text-white hover:text-pink-600 hover:underline" to="/RegistroPersonas">Nuevo registro</RouterLink>
                </li>
                <li>
                  <RouterLink class="text-gray-900 dark:text-white hover:text-cyan-500 hover:underline" to="/ListaPersonas">Personas registradas</RouterLink>
                </li>
                <li>
                  <RouterLink class="text-gray-900 dark:text-white hover:text-emerald-300 hover:underline" to="/BuscadorPersonas">Buscador de personas</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</nav>  
</header>
  
  
    <RouterView />
  </div>
  </template>