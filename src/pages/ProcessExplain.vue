<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <div class="container mt-5">
        <div class="row text-center mb-5 bg-vue2 text-vue p-3">
          <h3>Wie funktioniert dieses Spendensystem?</h3>
          <h5>
            In einer übersichtlichen Timeline möchten wir Ihnen den Ablauf kurz
            vorstellen.
          </h5>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div id="content">
                    <ul class="timeline">
                      <li class="event" data-date="Step 1">
                        <h3>Registration</h3>
                        <p>Registrierung der Spende auf unserer Homepage</p>
                      </li>
                      <li class="event" data-date="2:30 - 4:00pm">
                        <h3>Abholung oder Abgabe</h3>
                        <p>
                          Wir holen Ihre registrierte Spende bei Ihnen ab oder
                          Sie bringen uns Ihre registrierte Spende direkt in
                          unser Büro in Bremen
                        </p>
                      </li>
                      <li class="event" data-date="5:00 - 8:00pm">
                        <h3>Aufbereitung und Verteilung</h3>
                        <p>
                          Ihre Spenden werden von uns gesäubert, repariert,
                          sortiert und verpackt
                        </p>
                      </li>
                      <li class="event" data-date="8:30 - 9:30pm">
                        <h3>Versand zu unseren Partnerländern</h3>
                        <p>
                          Sind genug Transportboxen befüllt, gehen die
                          verpackten Spenden in den Versand zu unseren
                          Partnerländer
                        </p>
                      </li>
                      <li class="event" data-date="8:30 - 9:30pm">
                        <h3>Ankunft und Verteilung</h3>
                        <p>
                          Sind die Spenden angekommen, werden diese auf unsere Ausgabestellen in dem jewiligen Land verteilt und ausgegeben
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheFreeColumsLayout from "../layouts/TheFreeColumsLayout";

export default {
  name: "ProcessExplain",
  components: {
    TheFreeColumsLayout,
  },
};
</script>

<style scoped>
.timeline {
  border-left: 3px solid rgb(52, 73, 94);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(114, 124, 245, 0.09);
  margin: 0 auto;
  letter-spacing: 0.2px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  max-width: 40%;
}

@media (max-width: 767px) {
  .timeline {
    max-width: 98%;
    padding: 25px;
  }
}

.timeline h1 {
  font-weight: 300;
  font-size: 1.4em;
}

.timeline h2,
.timeline h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
}

.timeline .event {
  border-bottom: 1px dashed #e8ebf1;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

@media (max-width: 767px) {
  .timeline .event {
    padding-top: 30px;
  }
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -207px;
  content: attr(data-date);
  text-align: right;
  font-weight: 100;
  font-size: 0.9em;
  min-width: 120px;
}

@media (max-width: 767px) {
  .timeline .event:before {
    left: 0px;
    text-align: left;
  }
}

.timeline .event:after {
  -webkit-box-shadow: 0 0 0 3px #727cf5;
  box-shadow: 0 0 0 3px rgb(52, 73, 94);
  left: -55.8px;
  background: #fff;
  border-radius: 50%;
  height: 9px;
  width: 9px;
  content: "";
  top: 5px;
}

@media (max-width: 767px) {
  .timeline .event:after {
    left: -31.8px;
  }
}

.rtl .timeline {
  border-left: 0;
  text-align: right;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 3px solid #727cf5;
}

.rtl .timeline .event::before {
  left: 0;
  right: -170px;
}

.rtl .timeline .event::after {
  left: 0;
  right: -55.8px;
}
</style>
