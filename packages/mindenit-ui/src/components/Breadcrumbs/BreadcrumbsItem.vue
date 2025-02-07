<script lang="ts" setup>
import { cn } from '../../utils'
import { Primitive } from 'reka-ui'
import { type BreadcrumbItemProps, breadcrumbItemVariants } from '.'

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
	asChild: false,
	active: false,
})
</script>

<template>
	<Primitive :class="cn(breadcrumbItemVariants({ active }), props.active)" v-bind="props" as="a">
		<slot />
	</Primitive>
</template>
