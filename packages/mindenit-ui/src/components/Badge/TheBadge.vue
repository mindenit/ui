<script setup lang="ts">
import type { BadgeProps} from './index';
import { cn } from '../../utils'
import { computed } from 'vue'
import { badgeVariants } from './index'

const props = withDefaults(defineProps<BadgeProps>(), { color: 'default' })
const computedClasses = computed(() => cn(badgeVariants({ color: props.color })))
</script>

<template>
	<span
		class="inline-block whitespace-nowrap rounded-full border px-2 py-[2px] text-center text-xs font-medium"
		:class="computedClasses"
	>
		<div class="flex items-center gap-[2px]">
			<slot />
		</div>
	</span>
</template>
