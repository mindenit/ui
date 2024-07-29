import type { ToastRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export { default as Toaster } from './TheToaster.vue'
export { default as Toast } from './TheToast.vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastDescription } from './ToastDescription.vue'
export { default as ToastProvider } from './ToastProvider.vue'
export { toast, useToast } from './useToast'

import { type VariantProps, cva } from 'class-variance-authority'

export const toastVariants = cva(
	'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-3 shadow-sm shadow-fiord-950/20 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none',
	{
		variants: {
			variant: {
				error: '[&_svg]:text-amaranth-500 dark:[&_svg]:text-amaranth-400',
				warning: '[&_svg]:text-amber-500 dark:[&_svg]:text-amber-400',
				success: '[&_svg]:text-christi-500',
				info: '[&_svg]:text-royal-blue-500 dark:[&_svg]:text-royal-blue-400',
				feature: '[&_svg]:text-fiord-500 dark:[&_svg]:text-fiord-400'
			},
			defaultVariants: {
				variant: 'info'
			}
		}
	}
)

export type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
	class?: HTMLAttributes['class']
	variant?: ToastVariants['variant']
	onOpenChange?: ((value: boolean) => void) | undefined
}
