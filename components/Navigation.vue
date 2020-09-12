<template>
  <div class="flex self-start min-w-full items-center justify-between">
    <div class="flex items-center">
      <img src="~assets/img/logo.svg" class="h-8 mr-10" alt="Vybe Logo" />
      <nav class="flex space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link to="/#mission" class="hover:text-indigo-700">Mission</Nuxt-Link>
        <Nuxt-Link to="/#loans" class="hover:text-indigo-700">Loans</Nuxt-Link>
        <Nuxt-Link to="/" class="hover:text-indigo-700">Token</Nuxt-Link>
        <Nuxt-Link to="/" class="hover:text-indigo-700">Team</Nuxt-Link>
      </nav>
    </div>
    <div>
      <nav class="flex space-x-10 text-lg font-bold leading-none">
        <Nuxt-Link to="/" class="hover:text-indigo-700">Documentation</Nuxt-Link>
        <Nuxt-Link to="/staking" class="flex hover:text-indigo-700">
          <span>Staking Portal</span>
          <img src="~assets/icons/arrow-nav.svg" alt="Arrow Right Icon" class="ml-2">
        </Nuxt-Link>
      </nav>
    </div>
  </div>
</template>
