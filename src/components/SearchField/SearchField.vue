<script lang="ts" setup>
import { TextFieldRoot, TextFieldSlot, TextFieldInput } from '../TextField'
import { Icon } from '@iconify/vue'
import { Button } from '../Button'
import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

const element = ref<HTMLInputElement | null>(null)
const searchValue = ref('')
const { focused } = useFocus(element)

const handleReset = () => {
	searchValue.value = ''
	focused.value = true
}

const handleUpdate = (value: string | number) => {
	searchValue.value = value as string
}
</script>

<template>
	<TextFieldRoot>
		<TextFieldSlot>
			<Icon icon="ph:magnifying-glass" />
		</TextFieldSlot>
		<TextFieldInput
			v-bind="$attrs"
			ref="element"
			id="search"
			type="search"
			:model-value="searchValue"
			@update:model-value="handleUpdate"
		/>
		<TextFieldSlot>
			<Button v-if="searchValue.length" variant="ghost" appearance="icon" @click="handleReset">
				<Icon icon="ph:x" />
			</Button>
		</TextFieldSlot>
	</TextFieldRoot>
</template>
