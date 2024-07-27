<script lang="ts" setup>
import { useDropZone } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{ acceptedFileTypes?: string[] }>()

const emits = defineEmits<{
	drop: [files: File[] | null, event: DragEvent]
	enter: [files: File[] | null, event: DragEvent]
	over: [files: File[] | null, event: DragEvent]
	leave: [files: File[] | null, event: DragEvent]
}>()

const elementRef = ref<HTMLDivElement>()

const args = useDropZone(elementRef, {
	dataTypes: props.acceptedFileTypes,
	onDrop(files, event) {
		emits('drop', files, event)
	},
	onEnter(files, event) {
		emits('enter', files, event)
	},
	onOver(files, event) {
		emits('over', files, event)
	},
	onLeave(files, event) {
		emits('leave', files, event)
	}
})
</script>

<template>
	<div
		class="box-border flex min-h-20 w-full items-center justify-center rounded-lg border border-dashed border-fiord-300 p-4 data-[hovered=true]:border-fiord-500 data-[hovered=true]:bg-fiord-100"
		ref="elementRef"
		:data-hovered="args.isOverDropZone.value"
	>
		<slot></slot>
	</div>
</template>
