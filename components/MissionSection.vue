<template>
  <section class="bg-black text-white py-12 md:py-16 xl:py-20" id="mission">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16  xl:px-0">

      <div class="pb-10">
        <h2 class="text-3xl font-bold mb-6">{{ $t('nav-mission') }}</h2>
        <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl">
          {{ $t('mission-copy-one') }}
          <br/></br/>
          {{ $t('mission-copy-two') }}
        </p>
      </div>

      <div class="flex flex-col space-y-8 md:flex-row md:space-y-0 md:items-center md:space-x-16 border-t border-b border-gray-800 px-0 sm:px-2 py-8 md:p-10">

        <div class="flex items-center">
          <img src="~assets/icons/loans-4.svg" class="mr-4" alt="">
          <div class="">
            <h4 class="text-xl font-bold leading-tight">{{ $t('mission-loans') }}</h4>
            <p class="">{{ $t('mission-loans-copy') }}</p>
          </div>
        </div>

        <div class="flex items-center">
          <img src="~assets/icons/staking-2.svg" class="mr-4" alt="">
          <div class="">
            <h4 class="text-xl font-bold leading-tight">{{ $t('mission-staking') }}</h4>
            <p class="">{{ $t('mission-staking-copy') }}</p>
          </div>
        </div>

        <div class="hidden md:flex items-center">
          <img src="" class="" alt="">
          <div class="">
            <h4 class="text-xl font-medium text-gray-500">{{ $t('mission-coming-soon') }}</h4>
            <p class="text-gray-500">{{ $t('mission-coming-soon-copy') }}</p>
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
