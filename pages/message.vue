<template>
  <div class="mb-20">
    <Header :backControl="true">
      <div class="flex flex-col items-center text-[#19110B]">
        <p class="text-base font-bold mb-1.5">Nachrichten zum Termin</p>
        <p class="text-sm font-semibold mb-1.5">Haarstube | Erlangen</p>
        <p class="text-xs mb-4">21 SEP 2020 - 11.30 Uhr</p>
      </div>
    </Header>
    <div class="p-5">
      <div v-for="(message, index) in messages" :key="index">
        <div
          class="mb-10 flex"
          :class="{ 'flex-row-reverse': message.user === 'me' }"
        >
          <div
            class="flex-shrink-0"
            :class="message.user === 'me' ? 'ml-2.5' : 'mr-2.5'"
          >
            <Avatar :user="users[message.user]" />
          </div>
          <p
            v-if="message.content.type === 'text'"
            class="px-5 py-3.5 rounded-[18px] text-ms leading-normal"
            :class="
              message.user === 'me'
                ? 'bg-[#F6F5F3] text-[#767676]'
                : 'bg-[#F0F3F6] text-[#19110B]'
            "
          >
            {{ message.content.content }}
          </p>
          <img v-else :src="message.content.content" class="rounded-[18px]" />
        </div>
      </div>
    </div>
    <div class="w-full flex p-5 rounded-t-[36px] bg-white fixed bottom-0">
      <TextField placeholder="Write your message" inputClass="pl-11">
        <div class="w-10 flex justify-center">
          <img src="~/assets/images/icons/paperclip.svg" />
        </div>
      </TextField>
      <Button
        className="bg-[#19110B] rounded-[18px] w-12 h-12 flex flex-shrink-0 justify-center items-center ml-4"
      >
        <img src="~/assets/images/icons/send.svg" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        me: {
          name: "Sean",
          avatar: null,
        },
        you: {
          name: "Alex",
          avatar: require("~/assets/images/profile_sm.png"),
        },
      },
      messages: [
        {
          user: "you",
          content: {
            type: "text",
            content:
              "Könten wir vielleicht die lange Haar diese mal verwenden?",
          },
        },
        {
          user: "me",
          content: {
            type: "text",
            content: "Klar, kein Problem",
          },
        },
        {
          user: "you",
          content: {
            type: "image",
            content: require("~/assets/images/chat.png"),
          },
        },
        {
          user: "me",
          content: {
            type: "text",
            content: "Die sind doch ganz schön oder?",
          },
        },
        {
          user: "you",
          content: {
            type: "text",
            content:
              "Könten wir vielleicht die lange Haar diese mal verwenden?",
          },
        },
      ],
    };
  },
};
</script>