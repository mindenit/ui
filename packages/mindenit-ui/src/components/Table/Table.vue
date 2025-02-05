<script lang="ts" setup>
import type { TableProps } from '.';
import { cn } from '../../utils';

const props = withDefaults(defineProps<TableProps>(), {
	caption: 'bottom',
})
</script>

<template>
	<div v-bind="props" class="relative w-full overflow-auto">
		<table :class="cn('w-full text-sm', props.caption === 'bottom' ? 'caption-bottom' : 'caption-top')">
			<slot />
		</table>
	</div>
</template>
