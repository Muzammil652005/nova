<template>
  <section class="w-full min-h-screen lg:min-h-[760px] relative pt-4 px-4 overflow-visible">
    <Nav />

    <div class="top_gem"></div>

    <!-- Mobile View -->
    <div class="w-full h-auto z-30 max-lg:block hidden">
      <div class="max-w-[1440px] h-auto mx-auto flex flex-col items-center justify-center max-md:pb-4 md:px-4 xl:px-0">
        <div class="w-full flex flex-col items-center lg:items-start justify-center gap-y-4 py-4">
          <span class="hero-mini"> Building Brands That Last </span>

          <h3 class="hero-title">
            From startup to enterprise—get, register,
            <span class="text-primary"> effortlessly.</span>
          </h3>

          <p class="hero-sub text-center lg:text-start">
            We offer professional business addresses that empower entrepreneurs
            to register, grow, and scale—built for trust, flexibility, and lasting impact.
          </p>

          <span class="w-full pt-0.5 my-4 bg-primary hero-border"></span>

          <span class="w-full flex items-center justify-center gap-x-4 hero-group">
            <div class="avatar-group -space-x-6">
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" /></div></div>
            </div>

            <p class="text-center">
              Trusted by 10,000+ <br />
              worldwide users
            </p>
          </span>
        </div>
      </div>
    </div>

    <!-- Desktop View -->
    <div class="max-lg:hidden block">
      <div class="max-w-[1440px] h-auto mx-auto flex flex-col lg:flex-row items-center justify-center md:px-4 xl:px-0">
        <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-y-4 py-10">
          <span class="hero-mini"> Building Brands That Last </span>

          <h3 class="hero-title">
            From startup to enterprise—get, register,
            <span class="text-primary"> effortlessly.</span>
          </h3>

          <p class="hero-sub">
            We offer professional business addresses that empower entrepreneurs
            to register, grow, and scale—built for trust, flexibility, and lasting impact.
          </p>

          <span class="w-full pt-0.5 my-4 bg-primary hero-border"></span>

          <span class="w-full flex items-center justify-start gap-x-4 hero-group">
            <div class="avatar-group -space-x-6">
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" /></div></div>
              <div class="avatar"><div class="w-12"><img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" /></div></div>
            </div>

            <p>
              Trusted by 10,000+ <br />
              worldwide users
            </p>
          </span>
        </div>

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
