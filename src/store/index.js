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

      if (this.state.zielland == "1") {
        this.state.zielland = "Mali";
      } else if (this.state.zielland == "2") {
        this.state.zielland = "Somalia";
      } else if (this.state.zielland == "3") {
        this.state.zielland = "Djibuti";
      } else if (this.state.zielland == "4") {
        this.state.zielland = "Ukraine";
      } else if (this.state.zielland == "5") {
        this.state.zielland = "Eritrea";
      } else if (this.state.zielland == "6") {
        this.state.zielland = "Burkina Faso";
      } else {
        this.state.zielland = "Nach Bedarf";
      }
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
  },
});

export default store;
