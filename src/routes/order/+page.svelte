<script>
	import { typewriter } from './transition.js';
	import { messages } from './loading-messages.js';
    import Page from '../+page.svelte';

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex items-center justify-center h-screen">
    <h1 class="text-4xl font-bold <text-right-></text-right->center">Заказ принят</h1>
    <!-- {#key i}
        <p class="text-3xl font-bold text-centre" in:typewriter={{ speed: 10 }}>
	        {messages[i] || ''}
        </p>
    {/key} -->

</div>

