<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-vue">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
        <a class="navbar-brand" href="#"><img src="../assets/Klamottenengel_Logo_No.png" alt="Klamottenengel Logo" class="img-fluid" style="width: 5em"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-center h5" id="navbarsExample11">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Startseite</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ablauf</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Partnerländer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Über Uns</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>

<style scoped>
.navbar {
  padding-top: unset !important;
  padding-bottom: unset !important;
}
</style>
