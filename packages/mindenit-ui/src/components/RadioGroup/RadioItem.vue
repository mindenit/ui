<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps } from 'reka-ui'

export interface RadioItemProps extends RadioGroupItemProps {
	class?: HTMLAttributes['class']
	id?: HTMLAttributes['id']
	label?: string
}

const props = defineProps<RadioItemProps>()
</script>

<template>
	<div class="flex items-center">
		<RadioGroupItem
			v-bind="props"
			class="flex size-5 cursor-pointer items-center justify-center rounded-full border data-[state=checked]:border-royal-blue-700 data-[state=unchecked]:border-fiord-400 data-[state=checked]:bg-royal-blue-500 data-[state=unchecked]:bg-white data-[state=checked]:shadow-none data-[state=unchecked]:shadow-fiord-950/15 dark:data-[state=checked]:border-royal-blue-400 dark:data-[state=unchecked]:border-fiord-700 dark:data-[state=checked]:bg-royal-blue-500 dark:data-[state=unchecked]:bg-fiord-950 dark:data-[state=checked]:shadow-none dark:data-[state=unchecked]:shadow-fiord-500/15"
		>
			<RadioGroupIndicator
				class="relative flex size-full items-center justify-center after:block after:size-[10px] after:rounded-[50%] after:bg-white after:content-['']"
			/>
		</RadioGroupItem>
		<label v-if="label" class="pl-[15px] text-[15px] leading-none dark:text-white">
			{{ label }}
		</label>
	</div>
</template>
