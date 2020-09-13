<template>
  <section class="bg-gray-100 text-gray-900 py-12 md:py-16 xl:py-20" id="loans">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0">

      <div class="pb-10">
        <h2 class="text-3xl font-bold mb-6">{{ $t('nav-loans') }}</h2>
        <p class="text-xl font-normal tracking-wide leading-relaxed max-w-2xl">{{ $t('loans-copy-one') }}<br/>
        </br/>{{ $t('loans-copy-two') }}</p>
      </div>

      <div class="bg-gray-200 rounded-lg shadow-sm py-3 px-4 md:py-8 md:px-10 max-w-xl flex items-center">
        <img src="~assets/icons/etherscan-logo.svg" alt="Etherscan Logo" class="h-8 pr-6 mr-6 border-r border-black">
        <a
          href="https://etherscan.io/address/0x382EE41496E0Bb88F046F2C0D1Cf894F8D272BD5"
          target="_blank"
          class="text-lg text-black font-bold hover:text-indigo-700"
        >
          {{ $t('loans-cta') }}
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>
