<script lang="ts">
    import type { Item } from "$lib/types";
    let { data } = $props();

    let selectedItemId = $state(data.availableItems.at(0)?.id || 0);
    let cart: Item[] = $state([]);

    const addToCart = () => {
        const selectedItem = data.availableItems.find((item) => item.id === selectedItemId);
        if (!selectedItem) { return; }
        
        if (cart.find((item) => item.id === selectedItem.id)) { return; }

        cart.push(selectedItem);
    }

</script>

<div class="h-screen w-screen flex justify-center items-center">
    <main class="grid grid-cols-2 p-6 gap-6 max-w-[1024px] w-full">
        <section class="w-full">
            <div class="join w-full">
                <select bind:value={selectedItemId} class="select select-bordered w-full join-item">
                    {#each data.availableItems as item}
                        <option value={item.id} disabled={cart.find((v) => v.id === item.id) !== undefined}>{item.name}</option>
                    {/each}
                </select>
                
                <button onclick={addToCart} class="btn btn-primary join-item">Добавить в заказ</button>
            </div>
        </section>
        
        <form action="?/order" method="post" class="flex flex-col gap-6 h-96 justify-between">
            {#if cart.length > 0}
                <table class="table table-zebra">
                    <tbody>
                        {#each cart as item, id}
                        <tr>
                            <td>
                                <input type="hidden" name="item" value={item.id}>
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <button onclick={() => cart = cart.filter((v) => v.id !== item.id)}>Удалить</button>
                            </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            {:else}
                <p class="text-center">Выберите предметы для доставки</p>
            {/if}
            <button  disabled={cart.length <= 0} name="Prop"  class="btn btn-accent">
                Заказать
            </button>
        </form>
    </main>
</div>