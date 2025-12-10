<template>
  <div class="w-screen min-h-screen flex overflow-hidden">

    <DashboardSidebar />

    <div class="flex-1 min-h-screen flex flex-col overflow-y-auto">
      <DashboardTopbar />

      <div class="w-full h-auto p-4 overflow-y-auto">
        <slot />
      </div>
    </div>

  </div>
</template>
