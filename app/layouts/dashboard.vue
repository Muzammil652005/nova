<template>
  <div class="w-screen h-dvh flex items-center justify-start">
    <DashboardSidebar />

    <div class="size-full flex flex-col dashboard_top_div">
      <DashboardTopbar />
      <slot />
    </div>
  </div>
</template>
