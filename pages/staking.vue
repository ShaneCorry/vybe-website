<template>
  <div class="bg-indigo-100 h-screen lg:pt-16 md:pt-10">

    <header class="flex justify-center mb-12">
      <div class="">
        <img src="~assets/img/logo.svg" class="h-16 mb-2" alt="">
        <div class="bg-black py-1">
          <h1 class="text-white text-xl font-bold tracking-wider uppercase text-center">Staking</h1>
        </div>
      </div>
    </header>

    <section>
      <div class="bg-white border border-gray-200 max-w-xl mx-auto rounded-lg shadow-lg py-10 px-10">

        <!-- Network Stake / Total Staked -->
        <div class="flex space-x-12 border-b border-gray-400 pb-10 mb-10">
          <div class="text-black text-xl font-bold w-40">
            Network Stake
          </div>
          <div class="">
            <p class="text-2xl text-black font-bold leading-tight">195,720.00</p>
            <span class="text-gray-900 font-medium">staked</span>
          </div>
        </div>

        <!-- User Staked -->
        <div class="flex space-x-12 border-b border-gray-400 pb-10 mb-10">
          <div class="text-black text-xl font-bold w-40">
            My Stake
          </div>
          <div class="space-y-4">
            <div class="">
              <p class="text-2xl text-black font-bold leading-tight">15,000.73458209</p>
              <span class="text-gray-700 font-medium">balance</span>
            </div>
            <div class="">
              <p class="text-2xl text-black font-bold leading-tight">12,000.00</p>
              <span class="text-gray-700 font-medium">staked</span>
            </div>
            <div class="">
              <button type="button" class="text-lg font-semibold border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 rounded-full mr-1 hover:bg-indigo-800 hover:border-indigo-800">Deposit</button>
              <button type="button" class="text-lg font-semibold border-2 border-black text-black py-1 px-5 rounded-full hover:bg-black hover:text-white">
                Withdraw
              </button>
            </div>
          </div>
        </div>

        <!-- User Staked -->
        <div class="flex space-x-12">
          <div class="text-black text-xl font-bold w-40">
            My Rewards
          </div>
          <div class="">
            <p class="text-2xl text-black font-bold leading-tight">230.00</p>
            <span class="text-gray-700 font-medium">available</span>
            <div class="mt-4">
              <button type="button" class="text-lg font-semibold border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 rounded-full mr-1 hover:bg-indigo-800 hover:border-indigo-800">Claim Rewards</button>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="mt-8 flex justify-center">
      <Nuxt-Link to="/" class="flex hover:text-indigo-700">
        <img src="~assets/icons/arrow-left.svg" alt="Arrow Left Icon" class="mr-2">
        <span class="text-black text-lg font-medium hover:text-indigo-700">Back to website</span>
      </Nuxt-Link>
    </div>

  </div>
</template>

<script>
export default {

}
</script>
