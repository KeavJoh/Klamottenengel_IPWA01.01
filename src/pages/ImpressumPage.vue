<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <div class="mt-5 text-center full-width">
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Klamottenengel e. V.<br />
          L&uuml;der-Cl&uuml;ver-Stra&szlig;e 25<br />
          28779 Bremen
        </p>

        <p>
          <strong>Vertreten durch:</strong><br />
          Kevin Johr
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 015222633070<br />
          E-Mail: info@kevin-johr.dev
        </p>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          Kevin Johr<br />
          L&uuml;der-Cl&uuml;ver-Stra&szlig;e 25 <br />
          28779 Bremen
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            >https://ec.europa.eu/consumers/odr/</a
          >.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
      </div>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheFreeColumsLayout from "../layouts/TheFreeColumsLayout";

export default {
  name: "ImpressumPage",
  components: {
    TheFreeColumsLayout,
  },
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
