<script lang="ts" setup>
import { DropdownMenuRoot, type DropdownMenuRootEmits, type DropdownMenuRootProps, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<DropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()
const forwerded = useForwardPropsEmits(props, emits)
</script>

<template>
	<DropdownMenuRoot v-bind="forwerded">
		<slot />
	</DropdownMenuRoot>
</template>
