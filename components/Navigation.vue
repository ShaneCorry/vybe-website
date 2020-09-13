<template>
  <div class="flex self-start min-w-full items-center justify-between">

    <!-- Mobile menu -->
    <div v-show="mobileMenu" class="z-20 bg-white fixed top-0 left-0 w-full h-screen p-8">
      <h5 class="text-2xl font-bold mb-10">{{ $t('nav-menu') }}</h5>
      <ul class="text-xl space-y-8">
        <li><Nuxt-Link class="hover:text-indigo-700" @click.native="mobileMenu = false" to="/#mission">{{ $t('nav-mission') }}</Nuxt-Link></li>
        <li><Nuxt-Link class="hover:text-indigo-700" @click.native="mobileMenu = false" to="/#loans">{{ $t('nav-loans') }}</Nuxt-Link></li>
        <li><Nuxt-Link class="hover:text-indigo-700" @click.native="mobileMenu = false" to="/#token">{{ $t('nav-token') }}</Nuxt-Link></li>
        <li><Nuxt-Link class="hover:text-indigo-700" @click.native="mobileMenu = false" to="/#team">{{ $t('nav-team') }}</Nuxt-Link></li>
        <li><Nuxt-Link class="hover:text-indigo-700" @click.native="mobileMenu = false" to="/">{{ $t('nav-docs') }}</Nuxt-Link></li>
      </ul>
      <div v-on:click="mobileMenu = false" class="absolute bottom-0 left-0 w-full border-t py-8 mt-8">
        <span class="px-8 text-gray-700">{{ $t('nav-close-menu') }}</span>
      </div>
    </div>
    <!-- // Mobile menu -->

    <div class="flex items-center z-10">
      <img v-on:click="mobileMenu = true" src="~assets/icons/menu.svg" alt="Menu Icon" class="block mr-5 sm:m-0 sm:hidden">
      <img src="~assets/img/logo.svg" class="h-8 mr-10" alt="Vybe Logo" />
      <nav class="hidden lg:flex space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link to="/#mission" class="hover:text-indigo-700">{{ $t('nav-mission') }}</Nuxt-Link>
        <Nuxt-Link to="/#loans" class="hover:text-indigo-700">{{ $t('nav-loans') }}</Nuxt-Link>
        <Nuxt-Link to="/#token" class="hover:text-indigo-700">{{ $t('nav-token') }}</Nuxt-Link>
        <Nuxt-Link to="/#team" class="hover:text-indigo-700">{{ $t('nav-team') }}</Nuxt-Link>
      </nav>
    </div>

    <div>
      <nav class="flex items-center space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link to="/" class="hidden md:block hover:text-indigo-700">{{ $t('nav-docs') }}</Nuxt-Link>
        <Nuxt-Link to="/staking" class="flex hover:text-indigo-700">
          <span>{{ $t('nav-portal') }}</span>
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
