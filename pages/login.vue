<script setup>
definePageMeta({
  layout: 'custom',
});

const supabase = useSupabaseClient();

const login = async () => {
  const { error } =
    await supabase.auth.signInWithOAuth(
      {
        provider: 'google',
      },
    );

  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">
      Log in
    </h1>
    <button
      @click="login"
      class="p-3 font-bold text-white bg-red-400 rounded">
      Login with Google
    </button>
  </div>
</template>
