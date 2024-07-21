<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import {
	TagsInputInput,
	TagsInputItem,
	TagsInputItemDelete,
	TagsInputItemText,
	TagsInputRoot,
	useForwardPropsEmits,
	type TagsInputRootEmits,
	type TagsInputRootProps
} from 'radix-vue'
import { TextFieldInput, TextFieldRoot } from '../TextField'
import { Button } from '../Button'

const props = withDefaults(
	defineProps<
		TagsInputRootProps & { placeholder: string; maxLength?: number; autoFocus?: boolean }
	>(),
	{ autoFocus: false, maxLength: 20 }
)
const emits = defineEmits<TagsInputRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<TagsInputRoot class="flex h-fit w-full flex-col gap-2" v-bind="forwarded">
		<TagsInputInput as-child>
			<TextFieldRoot>
				<TextFieldInput
					type="text"
					:max-length="maxLength"
					:placeholder="placeholder"
					:auto-focus="autoFocus"
				/>
			</TextFieldRoot>
		</TagsInputInput>
		<div class="inline-flex gap-1">
			<TagsInputItem
				class="flex h-6 items-center justify-between gap-2 rounded-md border border-fiord-300 bg-white py-1 pl-2 pr-1 text-sm data-[state=active]:ring data-[state=active]:ring-fiord-950/15 dark:border-fiord-700 dark:bg-fiord-950 dark:text-white"
				v-for="value in modelValue"
				:key="value"
				:value="value"
			>
				<TagsInputItemText />
				<TagsInputItemDelete as-child>
					<Button variant="ghost" appearance="icon" class="size-4 [&_svg]:size-3">
						<Icon icon="ph:x" />
					</Button>
				</TagsInputItemDelete>
			</TagsInputItem>
		</div>
	</TagsInputRoot>
</template>
