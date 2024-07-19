<script setup lang="ts">
import { cn } from '@/utils'
import { computed } from 'vue'
import { BadgeProps, badgeVariants } from '.'

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
