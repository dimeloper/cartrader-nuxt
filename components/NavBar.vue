import { NuxtLink } from
'../.nuxt/components';
<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = async () => {
  try {
    supabase.auth.signOut();

    // await $fetch(
    //   '/api/_supabase/session',
    //   {
    //     method: 'POST',
    //     body: {
    //       event: 'SIGNED_OUT',
    //       session: null,
    //     },
    //   },
    // );
  } catch (error) {
    return console.error(error);
  }

  navigateTo('/');
};
</script>

<template>
  <!-- NAVBAR -->
  <header
    class="sticky top-0 z-50 flex items-center justify-between p-4 space-x-1 bg-white border-b shadow-md">
    <NuxtLink
      class="font-mono text-3xl"
      to="/">
      cartrader
    </NuxtLink>
    <div v-if="user" class="flex">
      <NuxtLink
        to="/profile/listings"
        class="mr-5">
        profile
      </NuxtLink>
      <p
        class="cursor-pointer"
        @click="logout">
        Logout
      </p>
    </div>
    <NuxtLink v-else to="/login">
      Login
    </NuxtLink>
  </header>
  <!-- NAVBAR -->
</template>
