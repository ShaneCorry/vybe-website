<template>
  <section class="bg-gray-800 text-white py-16" id="footer">
    <div class="max-w-screen-xl mx-auto px-10 md:px-16 ld:px-0">

      <div class="flex items-start flex-col text-center items-center space-y-12 md:space-y-0 md:text-left md:items-start md:flex-row md:space-x-16 lg:space-x-32">

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">Explore</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#mission" class="">Mission</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#loans" class="">Loans</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#token" class="">Token</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/#team" class="">Team</Nuxt-Link></li>
            <li class="hover:text-indigo-400"><Nuxt-Link to="/staking" class="">Staking Portal</Nuxt-Link></li>
          </ul>
        </div>

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">Transparency</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><a href="https://github.com/vybetoken" target="_blank" class="">GitHub</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9" target="_blank" class="">VYBE Token contract</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x1Bcc32Ac1C994CE7e9526FbaF95f37AbC0B2EC39" target="_blank" class="">Vybe Loans contract</a></li>
            <li class="hover:text-indigo-400"><a href="https://etherscan.io/address/0x382EE41496E0Bb88F046F2C0D1Cf894F8D272BD5" target="_blank" class="">Vybe Staking contract</a></li>
          </ul>
        </div>

        <div class="">
          <h4 class="text-white text-lg font-bold tracking-wide uppercase mb-4">Social Media</h4>
          <ul class="space-y-2 text-lg text-white">
            <li class="hover:text-indigo-400"><a href="https://twitter.com/VybeToken" target="_blank" class="">Twitter</a></li>
            <li class="hover:text-indigo-400"><a href="https://t.me/vybetoken" target="_blank" class="">Telegram</a></li>
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
