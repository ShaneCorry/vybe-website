<template>
  <section class="bg-black text-white py-12 md:py-16 xl:py-20" id="team">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0 flex flex-col space-y-12 xl:flex-row xl:space-x-12 xl:space-y-0">

      <div class="flex-none">
        <h2 class="text-3xl font-bold mb-6">{{ $t('nav-team') }}</h2>
        <div class="">
          <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl">
            {{ $t('team-copy-one') }}<br/>
          </br/>{{ $t('team-copy-two') }}</p>
        </div>
      </div>

      <div class="mt-2">

        <!-- Ty Schenk -->
        <div class="flex items-start space-x-8 mb-8">
          <img src="~assets/img/ty-schenk.jpg" alt="Image of Ty Schenk" class="h-20 border-2 border-white rounded-full">
          <div class="">
            <h4 class="text-xl font-bold">
              Ty Schenk
              <a href="https://twitter.com/schenkty" target="blank" class="ml-2">
                <img src="~assets/icons/twitter.svg" alt="Twitter Logo" class="h-3 inline -mt-1">
              </a>
              <a href="https://www.linkedin.com/in/schenkty/" target="blank" class="ml-2">
                <img src="~assets/icons/linkedin.svg" alt="Twitter Logo" class="h-3 inline -mt-1">
              </a>
            </h4>
            <p class="max-w-lg">{{ $t('team-ty') }}</p>
          </div>
        </div>

        <!-- BigHands -->
        <div class="flex items-start space-x-8 mb-8">
          <img src="~assets/img/bighands.png" alt="Image of Bighands" class="h-20 border-2 border-white rounded-full">
          <div class="">
            <h4 class="text-xl font-bold">
              Bighands
            </h4>
            <p class="max-w-lg">{{ $t('team-bighands') }}</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>
