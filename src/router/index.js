import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage"; //import der page
// Umstellung auf WebHashHistory wenn veröffentlicht evt nötig

const router = createRouter({
  // optionen
  history: createWebHistory(),
  routes: [{
    // deklaration der page
    path: "/",
    component: HomePage,
  }]
}); 

export default router;
