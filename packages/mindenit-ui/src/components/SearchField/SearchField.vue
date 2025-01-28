<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useFocus, useVModel } from '@vueuse/core'
import { ref } from 'vue'
import { IconButton } from '../IconButton'
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from '../TextField'

const props = defineProps<{
	modelValue?: string
	defaultValue?: string
}>()
const emits = defineEmits<{
	'update:modelValue': [payload: string]
}>()
const element = ref<HTMLInputElement | null>(null)
const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue,
})

const { focused } = useFocus(element)

const handleReset = () => {
	modelValue.value = ''
	focused.value = true
}
</script>

<template>
	<TextFieldRoot>
		<TextFieldSlot>
			<Icon icon="ph:magnifying-glass" />
		</TextFieldSlot>
		<TextFieldInput v-bind="$attrs" id="search" ref="element" v-model="modelValue" type="search" />
		<TextFieldSlot>
			<IconButton
				v-if="modelValue?.length"
				icon="ph:x"
				variant="ghost"
				size="sm"
				@click="handleReset"
			/>
		</TextFieldSlot>
	</TextFieldRoot>
</template>
