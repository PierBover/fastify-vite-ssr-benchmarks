<script>
	export let products;
</script>

{#each products as product (product.id)}
	<div>
		<h2>{product.title}</h2>
		<h3>{product.title}</h3>
		<p>{product.description}</p>
	</div>
{/each}