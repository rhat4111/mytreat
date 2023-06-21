<template>
  <div
    class="
      w-full
      h-screen
      px-5
      flex flex-col
      items-center
      justify-center
      relative
    "
  >
    <img src="~/assets/images/fail.png" class="mb-4" />
    <div class="text-[#19110B] flex flex-col items-center mb-20">
      <p class="text-4xl font-bold text-center">Zahlung Abgelehnt</p>
      <p class="text-base text-center">
        Deine Zahlung wurde nicht erfolgreich durchgeführt.
      </p>
    </div>
    <div class="p-5 w-full absolute bottom-0">
      <Button className="w-full h-10 bg-[#19110B] rounded-full">
        <span class="text-base font-bold text-white">Erneut versuchen</span>
      </Button>
    </div>
  </div>
</template>

<script>
export default {};
</script>