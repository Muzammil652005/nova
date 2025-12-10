<template>
  <section class="w-full min-h-screen lg:min-h-[760px] relative pt-4 px-4 overflow-visible">

    <div class="top_gem"></div>

    <!-- MOBILE VIEW -->
    <div class="w-full h-auto z-30 lg:hidden block">
      <div class="max-w-[1440px] h-auto mx-auto flex flex-col items-center justify-center max-md:pb-4 md:px-4 xl:px-0">
        <div class="w-full flex flex-col items-center justify-center gap-y-4 py-4 text-center">
          
          <span class="hero-mini">Building Brands That Last</span>

          <h3 class="hero-title">
            From startup to enterprise—get, register,
            <span class="text-primary"> effortlessly.</span>
          </h3>

          <p class="hero-sub text-center">
            We offer professional business addresses that empower entrepreneurs
            to register, grow, and scale—built for trust, flexibility, and lasting impact.
          </p>

          <span class="w-full pt-0.5 my-4 bg-primary hero-border"></span>

          <!-- Avatar Group -->
          <div class="flex flex-col items-center justify-center gap-3">
            <div class="flex -space-x-3">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                   class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                   class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                   class="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
                   class="w-10 h-10 rounded-full border-2 border-white" />
            </div>

            <p class="text-lg font-medium leading-tight">
              Trusted by <span class="text-primary font-semibold">5000+</span><br />
              worldwide users
            </p>
          </div>
        </div>
      </div>
    </div>


    <!-- DESKTOP VIEW -->
    <div class="hidden lg:block">
      <div class="max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row items-center justify-center md:px-4 xl:px-0">

        <!-- CONTENT LEFT -->
        <div class="w-full lg:w-1/2 flex flex-col items-start justify-center gap-y-4 py-10 text-start">

          <span class="hero-mini">Building Brands That Last</span>

          <h3 class="hero-title">
            From startup to enterprise—get, register,
            <span class="text-primary"> effortlessly.</span>
          </h3>

          <p class="hero-sub">
            We offer professional business addresses that empower entrepreneurs
            to register, grow, and scale—built for trust, flexibility, and lasting impact.
          </p>

          <span class="w-full pt-0.5 my-4 bg-primary hero-border"></span>

          <!-- Avatar Group -->
          <div class="flex items-center justify-start gap-x-4">
            <div class="flex -space-x-4">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
                   class="w-28 h-28 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                   class="w-28 h-28 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp"
                   class="w-28 h-28 rounded-full border-2 border-white" />
              <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp"
                   class="w-28 h-28 rounded-full border-2 border-white" />
            </div>

            <p class="text-lg font-medium">
              Trusted by <span class="text-primary font-semibold">5000+</span><br />
              worldwide users
            </p>
          </div>
        </div>


        <!-- FORM RIGHT -->
        <div class="w-1/2 hidden lg:flex items-center justify-end relative pt-[80px]">
          <div class="w-[450px] bg-white/10 border border-primary/20 backdrop-blur-3xl px-6 py-8 rounded-md shadow-md">
            <div class="px-4 space-y-3">

              <fieldset class="fieldset w-full">
                <legend class="fieldset-legend text-primary hidden lg:block">Name</legend>
                <input type="text" class="input input-primary w-full" placeholder="Name" />
              </fieldset>

              <fieldset class="fieldset w-full">
                <legend class="fieldset-legend text-primary hidden lg:block">Phone</legend>
                <input type="text" class="input input-primary w-full" placeholder="Phone" />
              </fieldset>

              <fieldset class="fieldset w-full">
                <legend class="fieldset-legend text-primary hidden lg:block">Email</legend>
                <input type="text" class="input input-primary w-full" placeholder="Email" />
              </fieldset>

              <fieldset class="fieldset w-full">
                <legend class="fieldset-legend text-primary hidden lg:block">Location</legend>
                <input type="text" class="input input-primary w-full" placeholder="Location" />
              </fieldset>

              <fieldset class="fieldset w-full">
                <legend class="fieldset-legend text-primary hidden lg:block">Message</legend>
                <textarea rows="3" class="textarea textarea-primary w-full" placeholder="Message"></textarea>
              </fieldset>

              <button class="btn btn-primary w-full mt-4">Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
