<script>
  let count = $state(0);
  console.log('Hello World from svelte')
</script>
<h1>Hello World from svelte</h1>
<button onclick={() => count += 1}>
    Count is: {count}
</button>
