<template>
  <section class="bg-gray-800 text-white py-12" id="footer">
    <div class="max-w-screen-xl mx-auto px-8 md:px-16 xl:px-0">

      <div class="flex items-start flex-col text-center items-center space-y-12 md:space-y-0 md:text-left md:items-start md:flex-row md:space-x-16 lg:space-x-32">

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">{{ $t('footer-explore') }}</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#mission" class="">{{ $t('nav-mission') }}</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#loans" class="">{{ $t('nav-loans') }}</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#token" class="">{{ $t('nav-token') }}</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#team" class="">{{ $t('nav-team') }}</Nuxt-Link></li>
            <li><a href="https://learn.vybe.finance" class="flex hover:text-indigo-700">
                <span>{{ $t('nav-docs') }}</span>
            </a></li>
            <li class="hover:text-indigo-400"><a href="https://portal.vybe.finance">{{ $t('nav-portal') }}</a></li>
          </ul>
        </div>

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">{{ $t('footer-transparency') }}</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><a href="https://github.com/vybetoken" target="_blank" class="">{{ $t('footer-github') }}</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x9E6a97d3a65BFd1dDC6D15025f985eBc9c8f2b0A" target="_blank" class="">{{ $t('footer-token-governance') }}</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9" target="_blank" class="">{{ $t('footer-token-contract') }}</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x81e756Ef62b481333A93011705bb4f6AF1475AEF" target="_blank" class="">{{ $t('footer-staking-contract') }}</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x382EE41496E0Bb88F046F2C0D1Cf894F8D272BD5" target="_blank" class="">{{ $t('footer-loan-contract') }}</a></li>
          </ul>
        </div>

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">{{ $t('footer-social-media') }}</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><a href="https://twitter.com/VybeToken" target="_blank" class="">{{ $t('footer-twitter') }}</a></li>
            <li class="hover:text-indigo-400"><a href="https://t.me/vybetoken" target="_blank" class="">{{ $t('footer-telegram') }}</a></li>
          </ul>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>
