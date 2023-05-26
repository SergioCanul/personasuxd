import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    //Ruta formulario de registros
    {
      path: "/RegistroPersonas",
      name: "Registro de Personas",
      component: () => import("../views/PersonasView.vue"),
    },
    //Ruta listado de registros
    {
      path: "/ListaPersonas",
      name: "ListaPersonas",
      component: () => import("../views/ListaPersonasView.vue"),
    },
    //Ruta buscador de personas
    {
      path: "/BuscadorPersonas",
      name:"BuscadorPersonas",
      component: () => import("../views/BuscadorPersonasView.vue")
    }




  ],
});

export default router;
