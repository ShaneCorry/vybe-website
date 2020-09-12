<template>
  <div class="flex self-start min-w-full items-center justify-between">

    <div v-show="mobileMenu" class="z-20 bg-white fixed top-0 left-0 w-full h-screen p-8">
      <h5 class="text-2xl font-bold mb-10">Menu</h5>
      <ul class="text-xl space-y-8">
        <li><Nuxt-Link to="/#mission">Mission</Nuxt-Link></li>
        <li><Nuxt-Link to="/#loans">Loans</Nuxt-Link></li>
        <li><Nuxt-Link to="/#token">Token</Nuxt-Link></li>
        <li><Nuxt-Link to="/#team">Team</Nuxt-Link></li>
        <li><Nuxt-Link to="/">Documentation</Nuxt-Link></li>
      </ul>
      <div v-on:click="mobileMenu = false" class="absolute bottom-0 left-0 w-full border-t py-8 mt-8">
        <span class="px-8 text-gray-700">Close Menu</span>
      </div>
    </div>

    <div class="flex items-center z-10">
      <img v-on:click="mobileMenu = true" src="~assets/icons/menu.svg" alt="Menu Icon" class="block mr-5 sm:m-0 sm:hidden">
      <img src="~assets/img/logo.svg" class="h-8 mr-10" alt="Vybe Logo" />
      <nav class="hidden lg:flex space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link @click.native="mobileMenu = false" to="/#mission" class="hover:text-indigo-700">Mission</Nuxt-Link>
        <Nuxt-Link @click.native="mobileMenu = false" to="/#loans" class="hover:text-indigo-700">Loans</Nuxt-Link>
        <Nuxt-Link @click.native="mobileMenu = false" to="/#token" class="hover:text-indigo-700">Token</Nuxt-Link>
        <Nuxt-Link @click.native="mobileMenu = false" to="/#team" class="hover:text-indigo-700">Team</Nuxt-Link>
      </nav>
    </div>
    <div>
      <nav class="flex items-center space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link to="/" class="hidden md:block hover:text-indigo-700">Documentation</Nuxt-Link>
        <Nuxt-Link to="/staking" class="flex hover:text-indigo-700">
          <span>Staking Portal</span>
          <img src="~assets/icons/arrow-nav.svg" alt="Arrow Right Icon" class="ml-1 md:ml-2">
        </Nuxt-Link>
      </nav>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileMenu: false
    };
  }
}
</script>
