<script setup lang="ts">
import {
	ToggleGroupRootProps,
	ToggleGroupRootEmits,
	ToggleGroupRoot,
	useForwardPropsEmits
} from 'radix-vue'
import { ref } from 'vue'

const props = defineProps<ToggleGroupRootProps>()
const emits = defineEmits<ToggleGroupRootEmits>()
const forwerded = useForwardPropsEmits(props, emits)
</script>

<template>
	<ToggleGroupRoot
		v-bind="forwerded"
		class="flex w-min items-center gap-1 rounded-xl bg-fiord-100 p-1 dark:bg-fiord-900"
		><slot />
	</ToggleGroupRoot>
</template>
