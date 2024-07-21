<script lang="ts" setup>
import {
	useForwardPropsEmits,
	PinInputRoot,
	type PinInputRootEmits,
	PinInputInput
} from 'radix-vue'
import { PinFieldProps } from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<PinFieldProps>(), { mode: 'numeric', length: 5 })
const emits = defineEmits<PinInputRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)

const type = computed(() => (props.mode === 'otp' ? 'text' : 'number'))
const isOTP = computed(() => props.mode === 'otp')
</script>

<template>
	<PinInputRoot v-bind="forwarded" :otp="isOTP" :type placeholder="○" class="inline-flex gap-x-8">
		<PinInputInput
			v-for="(id, index) in length"
			:key="id"
			:index="index"
			class="flex h-16 w-20 rounded-xl border border-fiord-300 text-center text-xl text-black outline-none placeholder:text-fiord-500 hover:border-fiord-400 focus:border-royal-blue-500 focus:ring focus:ring-royal-blue-500/40 disabled:cursor-not-allowed data-[disabled]:border-0 data-[disabled]:bg-fiord-200 data-[disabled]:text-fiord-500 dark:border-fiord-700 dark:bg-fiord-950 dark:text-white dark:hover:border-fiord-600 dark:focus:border-royal-blue-500 dark:disabled:bg-fiord-800"
		/>
	</PinInputRoot>
</template>
