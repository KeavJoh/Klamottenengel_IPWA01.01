import { createStore } from "vuex";

const store = createStore({
  state: {
    vorname: "Kevin",
    nachname: null,
    adresse: null,
    stadt: null,
    postleitzahl: null,
    telefonnummer: null,
    date: null,
    zielland: null,
    informationen: null,
    officeForm: false,
  },
  mutations: {
    setDonation(state, payload) {
      (state.vorname = payload.vorname),
        (state.nachname = payload.nachname),
        (state.adresse = payload.adresse),
        (state.stadt = payload.stadt),
        (state.postleitzahl = payload.postleitzahl),
        (state.telefonnummer = payload.telefonnummer),
        (state.date = payload.date),
        (state.zielland = payload.zielland),
        (state.informationen = payload.informationen);
    },

    setFormStatus(state, payload) {
      state.officeForm = payload.officeForm;
    },
  },
  actions: {
    loadDonation(context, payload) {
      const donationData = {
        vorname: payload.vorname,
        nachname: payload.nachname,
        adresse: payload.adresse,
        stadt: payload.stadt,
        postleitzahl: payload.postleitzahl,
        telefonnummer: payload.telefonnummer,
        date: payload.date,
        zielland: payload.zielland,
        informationen: payload.informationen,
      };

      context.commit("setDonation", {
        vorname: donationData.vorname,
        nachname: donationData.nachname,
        adresse: donationData.adresse,
        stadt: donationData.stadt,
        postleitzahl: donationData.postleitzahl,
        telefonnummer: donationData.telefonnummer,
        date: donationData.date,
        zielland: donationData.zielland,
        informationen: donationData.informationen,
      });
    },

    changeForm(context, payload) {
      const formStatus = {
        officeForm: payload.officeForm,
      };

      context.commit("setFormStatus", {
        officeForm: formStatus.officeForm,
      });
    },
  },
  getters: {
    getVorname: (state) => state.vorname,
    getNachname: (state) => state.nachname,
    getAdresse: (state) => state.adresse,
    getStadt: (state) => state.stadt,
    getPostleitzahl: (state) => state.postleitzahl,
    getTelefonnummer: (state) => state.telefonnummer,
    getDate: (state) => state.date,
    getZielland: (state) => state.zielland,
    getInformation: (state) => state.informationen,
    getOfficeForm: (state) => state.officeForm,
  },
});

export default store;
