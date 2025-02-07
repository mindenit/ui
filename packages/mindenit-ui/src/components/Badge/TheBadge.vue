<script setup lang="ts">
import type { BadgeProps } from './index';
import { cn } from '../../utils';
import { badgeVariants } from './index';

const props = defineProps<BadgeProps>()
</script>

<template>
	<span
		class="inline-block whitespace-nowrap rounded-full border px-2 py-[2px] text-center text-xs font-medium"
		:class="cn(badgeVariants({ color: props.color, variant }))"
	>
		<div class="flex items-center gap-[2px]">
			<slot />
		</div>
	</span>
</template>
