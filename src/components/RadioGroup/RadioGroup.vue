<script setup lang="ts">
import {
	RadioGroupIndicator,
	RadioGroupItem,
	RadioGroupRoot,
	type RadioGroupItemProps,
	type RadioGroupRootEmits
} from 'radix-vue'
import { defineEmits, defineProps, ref, watchEffect } from 'vue'

interface Option extends Omit<RadioGroupItemProps, 'value'> {
	value: string
	label?: string
}

const props = defineProps<{
	options: Option[]
	modelValue: string
}>()

const emit = defineEmits<RadioGroupRootEmits>()
const selectedValue = ref(props.modelValue)
watchEffect(() => {
	selectedValue.value = props.modelValue
})

const updateValue = (value: string) => {
	selectedValue.value = value
	emit('update:modelValue', value)
}
</script>

<template>
	<RadioGroupRoot
		v-model="selectedValue"
		@change="updateValue"
		class="flex flex-col gap-2.5"
		aria-label="Options"
	>
		<div v-for="option in options" :key="option.id" class="flex items-center">
			<RadioGroupItem
				:id="option.id"
				class="d-flex size-5 cursor-pointer items-center justify-center rounded-full border data-[state=checked]:border-royal-blue-700 data-[state=unchecked]:border-fiord-400 data-[state=checked]:bg-royal-blue-500 data-[state=unchecked]:bg-white data-[state=checked]:shadow-none data-[state=unchecked]:shadow-fiord-950/15 dark:data-[state=checked]:border-royal-blue-400 dark:data-[state=unchecked]:border-fiord-700 dark:data-[state=checked]:bg-royal-blue-500 dark:data-[state=unchecked]:bg-fiord-950 dark:data-[state=checked]:shadow-none dark:data-[state=unchecked]:shadow-fiord-500/15"
				:value="option.value"
			>
				<RadioGroupIndicator
					class="relative flex size-full items-center justify-center after:block after:size-[10px] after:rounded-[50%] after:bg-white after:content-['']"
				/>
			</RadioGroupItem>
			<label :for="option.id" class="pl-[15px] text-[15px] leading-none text-white">
				{{ option.label }}
			</label>
		</div>
	</RadioGroupRoot>
</template>

<!-- data-[state=checked]: -->
