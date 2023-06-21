<template>
  <div>
    <Header :backControl="true">
      <span class="text-base font-bold text-[#19110B]">Termindetails</span>
    </Header>
    <div class="py-6">
      <div class="px-5 mb-5">
        <div class="rounded-t-[18px] shadow-theme">
          <div class="relative border-b border-b-[#E7ECF0]">
            <img src="~/assets/images/appointment_detail.png" />
            <div
              class="
                flex
                justify-between
                absolute
                top-0
                left-0
                w-full
                h-full
                p-5
              "
            >
              <div>
                <p
                  class="text-base font-bold leading-normal text-[#19110B] mb-1"
                >
                  Haarstube
                </p>
                <p
                  class="
                    text-sm
                    font-semibold
                    leading-normal
                    text-[#19110B]
                    mb-2
                  "
                >
                  Frisör | Erlangen
                </p>
                <p class="text-xs text-[#19110B]">21 SEP 2020 | 11.30 Uhr</p>
              </div>
              <NuxtLink to="/message">
                <img src="~/assets/images/icons/mail.svg" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="
              flex
              items-center
              justify-between
              border-b border-b-[#E7ECF0]
              p-5
              pt-6
            "
          >
            <div class="flex items-center">
              <img src="~/assets/images/profile_sm.png" class="w-8 h-8 mr-6" />
              <span class="text-sm font-bold text-[#19110B]">
                Behandlung bei:
              </span>
            </div>
            <span class="text-sm text-[#19110B]">Thomas</span>
          </div>
          <div class="relative text-sm leading-normal text-[#19110B] p-5">
            <span class="font-bold text-[#767676] absolute top-5 right-5"
              >124,99 €</span
            >
            <div class="mb-12">
              <p class="font-bold">Gebucht</p>
              <p>Waschen, Schneiden, Föhnen, Styling</p>
            </div>
            <div>
              <p class="font-bold">Beschreibung</p>
              <p>
                Es ist ein Waschgang mit hochwertigen Shampoo enthalten, sowie
                ein vollständiger Haarschnitt mit anschließenden Föhgang +
                Styling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 bg-white flex items-center justify-between">
        <div class="flex items-center">
          <Button className="w-8 h-8 rounded-[9px] bg-[#19110B25] mr-3">
            <img src="~/assets/images/icons/marker.svg" />
          </Button>
          <span class="text-base text-[#19110B]">Wegbeschreibung</span>
        </div>
        <Button className="h-9 w-36 rounded-full bg-[#19110B]">
          <span class="text-sm text-white font-bold mr-0.5">Jetzt starten</span>
          <img src="~/assets/images/icons/arrow_right.svg" />
        </Button>
      </div>
      <div class="p-5">
        <NuxtLink to="/message">
          <Button
            className="w-full h-10 rounded-full bg-[#C4C4C4] text-base font-bold text-white mb-4"
          >
            KONTAKT AUFNEHMEN
          </Button>
        </NuxtLink>
        <NuxtLink to="/appointments/time">
          <Button
            className="w-full h-10 rounded-full bg-[#19110B] text-base font-bold text-white"
          >
            TERMIN VERSCHIEBEN
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    return {
      id: params.id,
    };
  },
};
</script>