<template>
  <div>
    <Header :backControl="true">
      <div class="w-full flex flex-col items-center">
        <span class="text-base font-bold text-[#19110B] mb-10"
          >Sonjas Haarstube</span
        >
        <ul
          class="flex justify-between text-base text-[#19110B] w-full mt-1 px-2"
        >
          <li class="font-semibold border-b-2 border-b-[#19110B] px-3">
            Leistungen
          </li>
          <li class="border-b-2 border-b-white">Infos</li>
          <li class="border-b-2 border-b-white">Bewertungen</li>
        </ul>
      </div>
    </Header>
    <div class="-mt-10">
      <Service :service="service" />
    </div>
    <div class="px-5 mb-10">
      <div class="flex justify-between items-center mb-2.5">
        <span class="text-lg font-bold text-[#19110B]">Bewertungen</span>
        <Button className="h-8 px-8 rounded-full border border-[#19110B]">
          <span class="text-[#19110B] text-sm font-bold">Alle Bewertunge</span>
        </Button>
      </div>
      <div>
        <Review
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        />
      </div>
    </div>
    <div class="sticky bottom-5 px-5">
      <NuxtLink to="/appointments/time">
        <Button className="w-full h-10 rounded-[18px] bg-[#27AE60]">
          <div class="w-full flex justify-center items-center relative">
            <span class="text-base font-bold text-white"
              >WEITER ZUM Termin</span
            >
            <img
              src="~/assets/images/icons/collapsed.svg"
              class="filter brightness-0 invert absolute right-3"
            />
          </div>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: {
        carousel: [
          {
            title: "Sonjas Haarstube",
            description: "Friseurin |  Myhair Studio",
            image: require("~/assets/images/service_carousel/1.png"),
          },
          {
            title: "Sonjas Haarstube",
            description: "Friseurin |  Myhair Studio",
            image: require("~/assets/images/service_carousel/1.png"),
          },
          {
            title: "Sonjas Haarstube",
            description: "Friseurin |  Myhair Studio",
            image: require("~/assets/images/service_carousel/1.png"),
          },
          {
            title: "Sonjas Haarstube",
            description: "Friseurin |  Myhair Studio",
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
                done: true,
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
                done: true,
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
                done: true,
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
            name: "Herren - Colorationen & Haarschnitte",
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
                done: true,
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
            name: "Herren - Bart",
            count: 9,
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
                done: true,
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
        hasMore: false,
        hasType: true,
      },
      reviews: [
        {
          user: {
            name: "Joseph Hill",
            avatar: require("~/assets/images/profile.png"),
          },
          rate: 4,
          description:
            "I love the doctor! She’s doing her job pretty well. So i think i will come back again if i have the same problem in the future.",
        },
        {
          user: {
            name: "Hannah Rashid",
            avatar: require("~/assets/images/profile.png"),
          },
          rate: 4,
          description: "Great job for Dr. Anna Nicholas!",
        },
        {
          user: {
            name: "Lars Muellen",
            avatar: require("~/assets/images/profile.png"),
          },
          rate: 4,
          description:
            "We were looking for doctors who expertise in child neurology and we found Dr. Anna Nicholas in Medix.",
        },
      ],
    };
  },
};
</script>