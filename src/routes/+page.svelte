<script>
  export let data

  console.log({ data })

</script>

<svelte:head>
  <title>Home</title>
  <meta name='description' content='Measurements' />
</svelte:head>


<h1 class='text-3xl font-bold underline accent-white'>Readings </h1>
<div></div>

<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
  {#each data.allLatestScalesReadings as reading}
    <div class="flex flex-col pb-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{reading.scaleId}</dt>
      <dd class="text-lg font-semibold">{new Date(reading.timestampMs).toISOString()}</dd>
      <div class="mb-2 flex gap-2">
        <span class='text-lg font-semibold'>{reading.weightGrams}</span>
        {#if reading.weightGrams !== 0}
          <span class="mb-2 h-[15px] flex-1 rounded-xl bg-green-600"></span>
        {:else}
          <span class="mb-2 h-[15px] flex-1 rounded-xl bg-gray-50"></span>
        {/if}

        {#if reading.weightGrams >= 100}
          <span class="mb-2 h-[15px] flex-1 rounded-xl  bg-green-600"></span>
        {:else}
          <span class="mb-2 h-[15px] flex-1 rounded-xl bg-gray-50"></span>
        {/if}

        {#if reading.weightGrams >= 120}
          <span class="mb-2 h-[15px] flex-1 rounded-xl  bg-green-600"></span>
        {:else}
          <span class="mb-2 h-[15px] flex-1 rounded-xl bg-gray-50"></span>
        {/if}
    </div>

    </div>
  {/each}
</dl>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }
</style>
