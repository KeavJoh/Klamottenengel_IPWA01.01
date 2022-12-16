import { createStore } from "vuex";

const store = createStore({
  state: {
    vorname: "Peter",
    nachname: null,
    adresse: null,
    stadt: null,
    postleitzahl: null,
    telefonnummer: null,
    date: null,
    zielland: null,
    informationen: null,
    activeOfficeFormular: true,
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

    setDonationOffice(state, payload) {
      (state.zielland = payload.zielland),
        (state.informationen = payload.informationen);
    },

    setFormularStatusFinal(state, payload) {
      state.activeOfficeFormular = payload.activeOfficeFormular;
    },
  },
  actions: {
    loadDonationOffice(context, payload) {
      const officeDonationData = {
        zielland: payload.zielland,
        informationen: payload.informationen,
      };

      context.commit("setDonationOffice", {
        zielland: officeDonationData.zielland,
        informationen: officeDonationData.informationen,
      });

    },

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

    setFormularStatus(context, payload) {
      const formularStatus = {
        activeOfficeFormular: payload.activeOfficeFormular,
      };

      context.commit("setFormularStatusFinal", {
        activeOfficeFormular: formularStatus.activeOfficeFormular,
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
    getInformationen: (state) => state.informationen,
    getActiveOfficeFormular: (state) => state.activeOfficeFormular,
  },
});

export default store;
