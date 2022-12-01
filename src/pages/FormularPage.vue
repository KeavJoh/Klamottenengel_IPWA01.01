<template>
  <TheFreeColumsLayout>
    <template #mainSlot>
      <form class="container mt-5">
        <div class="row g-3">
          <div class="col-md-12 form-check form-switch form-check-reverse">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              @click="changeForm"
            />
            <label class="form-check-label" for="flexSwitchCheckReverse"
              >Reverse switch checkbox input</label
            >
          </div>
        </div>
        <div class="row g-3" id="formId">
          <!-- <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2" id="test">
            <label for="inputZip" class="form-label" id="1">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <span class="btn btn-primary" @click="testFunktion"> Sign in </span>
          </div> -->
        </div>
      </form>
    </template>
  </TheFreeColumsLayout>
</template>

<script>
import TheFreeColumsLayout from "@/layouts/TheFreeColumsLayout";

export default {
  name: "OfficeFormularPage",
  data() {
    return {
      officeForm: false,
    };
  },
  components: {
    TheFreeColumsLayout,
  },
  methods: {
    changeForm() {
      if (this.officeForm == false) {
        this.officeForm = true;
        document.getElementById(
          "formId"
        ).innerHTML = `          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2" id="test">
            <label for="inputZip" class="form-label" id="1">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <span class="btn btn-primary" @click="testFunktion"> Sign in </span>
          </div>`;
      } else if (this.officeForm == true) {
        this.officeForm = false;
        document.getElementById(
          "formId"
        ).innerHTML = `          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2" id="test">
            <label for="inputZip" class="form-label" id="1">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <span class="btn btn-primary" @click="testFunktion"> Sign in </span>
          </div>`;
      }
    },
  },
};
</script>

<style scoped></style>
