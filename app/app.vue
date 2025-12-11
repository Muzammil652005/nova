<template>
  <!-- FULL-WIDTH NAVBAR ALWAYS OUTSIDE WRAPPER -->
  <Nav />

  <!-- BACKGROUND GRID BELOW NAVBAR (FULL WIDTH) -->
  <div class="navbar-grid-bg"></div>

  <!-- WRAPPER ONLY FOR PAGE CONTENT -->
  <div class="content-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
usePageAnimations();
</script>

<style>

/* ---------------------------- */
/* 🌍 GLOBAL PAGE CONTENT WRAPPER */
/* ---------------------------- */
.content-wrapper {
  max-width: 440px;
  width: 100%;        /* ✅ FIXED (10% was wrong) */
  box-sizing: border-box;
}

/* ---------------------------- */
/* 🌈 GRID BG BELOW NAVBAR */
/* ---------------------------- */
.navbar-grid-bg {
  height: 1000px;
  width: 100%;
  background-color: #ffe7e3;
  background-image:
      linear-gradient(#ecd9d94d 1px, transparent 1px),
      linear-gradient(90deg, #ecd9d94d 1px, transparent 1px);
  background-size: 10px 10px;
}

/* ---------------------------- */
/* 💡 GLOBAL CLEANUP */
/* ---------------------------- */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
}

/* Disable all broken old overlay files */
.top_gem,
.top-fade-grid,
.bottom-fade-grid {
  display: none !important;
  background: none !important;
}

/* Equal spacing for all sections */
section {
  margin: 40px 0;
}

@media (min-width: 1024px) {
  section {
    margin: 60px 0;
  }
}

</style>
