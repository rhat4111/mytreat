<template>
  <div>
    <Header :backControl="true">
      <span class="text-base font-bold text-[#19110B]">Ergebnisse</span>
    </Header>
    <div class="px-5 py-6 pb-8">
      <div class="rounded-[18px] p-5 shadow-theme">
        <div class="mb-2.5">
          <TextField placeholder="Friseur" inputClass="h-8 text-base">
            <img src="~/assets/images/icons/magnifier.svg" class="h-4" />
          </TextField>
        </div>
        <div class="mb-2.5">
          <TextField placeholder="Nürnberg" inputClass="h-8 text-base">
            <img src="~/assets/images/icons/location.svg" class="h-4" />
          </TextField>
        </div>
        <div class="mb-2.5">
          <TextField placeholder="Beliebiges Datum" inputClass="h-8 text-base">
            <img src="~/assets/images/icons/calendar.svg" class="h-4" />
          </TextField>
        </div>
        <div class="flex justify-between items-center">
          <Button>
            <img src="~/assets/images/icons/filter.svg" class="mr-1" />
            <span class="text-xs text-[#767676]">Filtern</span>
          </Button>
          <Button>
            <img src="~/assets/images/icons/map.svg" class="mr-1" />
            <span class="text-xs text-[#767676]">Karte</span>
          </Button>
        </div>
      </div>
    </div>
    <div>
      <Service
        v-for="(service, index) in services"
        :key="index"
        :service="service"
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      services: [
        {
          carousel: [
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/1.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/1.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/1.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/1.png"),
            },
          ],
          services: [
            {
              name: "Damen - Haarschnitt & Stylings",
              count: 12,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
            {
              name: "Damen - Waschen & Schneiden",
              count: 4,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },

            {
              name: "Damen - Colorationen & Haarschnitte",
              count: 6,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
          ],
          hasMore: true,
        },
        {
          carousel: [
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/2.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/2.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/2.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/2.png"),
            },
          ],
          services: [
            {
              name: "Damen - Haarschnitt & Stylings",
              count: 12,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
            {
              name: "Damen - Waschen & Schneiden",
              count: 4,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },

            {
              name: "Damen - Colorationen & Haarschnitte",
              count: 6,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
          ],
          hasMore: true,
        },
        {
          carousel: [
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/3.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/3.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/3.png"),
            },
            {
              title: "Sonjas Haarstube",
              description: "Lerchenbühlstraße 16, Nürnberg (von Dir 5,2 Km)",
              image: require("~/assets/images/service_carousel/3.png"),
            },
          ],
          services: [
            {
              name: "Damen - Haarschnitt & Stylings",
              count: 12,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
            {
              name: "Damen - Waschen & Schneiden",
              count: 4,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },

            {
              name: "Damen - Colorationen & Haarschnitte",
              count: 6,
              children: [
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
                {
                  name: "Dauerwelle mit Farbe",
                  time: "45",
                  price: "39 €",
                  done: false,
                },
              ],
            },
          ],
          hasMore: true,
        },
      ],
    };
  },
};
</script>