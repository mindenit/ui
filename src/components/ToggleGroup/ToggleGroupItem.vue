<script setup lang="ts">
import {
	ToggleGroupItemProps,
	ToggleGroupItemEmits,
	ToggleGroupItem,
	useForwardPropsEmits
} from 'radix-vue'
import { ref, computed } from 'vue'

interface Props extends ToggleGroupItemProps {
	withIcon: boolean
}

const props = defineProps<Props>()
const forwerded = useForwardPropsEmits(props)

const withIcon = computed(() => {
	return props.withIcon ? '' : 'min-w-[100px]'
})
</script>

<template>
	<ToggleGroupItem
		v-bind="forwerded"
		class="flex items-center justify-center rounded-md p-1 text-sm text-fiord-400 transition-all data-[state=on]:bg-white data-[state=on]:text-black data-[state=on]:shadow-md dark:data-[state=on]:bg-fiord-800 dark:data-[state=on]:text-white"
		:class="withIcon"
		><slot />
	</ToggleGroupItem>
</template>
