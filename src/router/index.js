import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage"; //import der page
import ProcessExplain from "@/pages/ProcessExplain";
import PartnerCountries from "@/pages/PartnerCountries";
import AboutUs from "@/pages/AboutUs";
import ImpressumPage from "@/pages/ImpressumPage";
import FormularPage from "@/pages/FormularPage";
// Umstellung auf WebHashHistory wenn veröffentlicht evt nötig

const router = createRouter({
  // optionen
  history: createWebHistory(),
  routes: [
    {
      // deklaration der page
      path: "/",
      component: HomePage,
    },
    {
      path: "/process",
      component: ProcessExplain,
    },
    {
      path: "/partner_countries",
      component: PartnerCountries,
    },
    {
      path: "/about_us",
      component: AboutUs,
    },
    {
      path: "/impressum",
      component: ImpressumPage,
    },
    {
      path: "/form/donate",
      component: FormularPage,
    },
  ],
});

export default router;
