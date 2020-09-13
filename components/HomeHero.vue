<template>
  <header class="flex flex-col max-w-screen-xl h-screen mx-auto p-8">
    <Navigation />
    <div class="flex flex-1 items-center">
      <div class="max-w-md -mt-10">
        <h1 class="text-3xl md:text-5xl break-words font-black leading-snug uppercase mb-8">{{ $t('hero-tagline') }}</h1>
        <a
          href="#mission"
          class="border-4 border-black rounded-md py-4 px-12 text-lg font-bold uppercase leading-none hover:border-indigo-600"
        >
          <img src="~assets/icons/arrow-down.svg" alt="Down Arrow Icon" class="pr-2 inline">
          {{ $t('hero-cta') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>

</script>
