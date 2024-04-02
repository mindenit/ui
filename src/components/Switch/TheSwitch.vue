<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { ref } from 'vue'

const props = defineProps<{
	id: string
	modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const switchState = ref(props.modelValue || false)

const handleChange = () => {
	emit('update:modelValue', !switchState.value)
}
</script>
<template>
	<SwitchRoot
		:id="id"
		v-model:checked="switchState"
		@change="handleChange"
		class="relative flex h-5 w-[35px] cursor-pointer rounded-[10px] border data-[state=checked]:border-royal-blue-700 data-[state=unchecked]:border-fiord-300 data-[state=checked]:bg-royal-blue-500 data-[state=unchecked]:bg-fiord-200 data-[state=unchecked]:shadow-fiord-950/15 dark:data-[state=checked]:border-royal-blue-400 dark:data-[state=unchecked]:border-fiord-700 dark:data-[state=checked]:bg-royal-blue-500 dark:data-[state=unchecked]:bg-fiord-800 dark:data-[state=unchecked]:shadow-fiord-500/15"
	>
		<SwitchThumb
			class="my-auto block size-4 translate-x-0.5 rounded-full bg-white transition-transform duration-100 data-[state=checked]:translate-x-[19px]"
		/>
	</SwitchRoot>
</template>
