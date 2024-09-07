<script lang="ts" setup>
import { cn } from '@/utils'
import { Primitive } from 'radix-vue'
import { breadcrumbItemVariants, type BreadcrumbItemProps } from '.'

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
	asChild: false,
	active: false
})
</script>
<template>
	<Primitive :class="cn(breadcrumbItemVariants({ active }), props.active)" v-bind="props" as="a">
		<slot></slot>
	</Primitive>
</template>
