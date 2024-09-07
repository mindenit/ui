<script lang="ts" setup>
import { TextFieldRoot, TextFieldSlot, TextFieldInput } from '../TextField'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useFocus, useVModel } from '@vueuse/core'
import { IconButton } from '../IconButton'

const element = ref<HTMLInputElement | null>(null)
const props = defineProps<{
	modelValue?: string
	defaultValue?: string
}>()

const emits = defineEmits<{
	'update:modelValue': [payload: string]
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue
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
		<TextFieldInput v-bind="$attrs" v-model="modelValue" ref="element" id="search" type="search" />
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
