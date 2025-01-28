import { tv, type VariantProps } from 'tailwind-variants'

export const alertVariants = tv(
	{
		base: 'border-fiod-400 box-border inline-flex h-auto min-h-8 w-full items-start justify-start gap-2 rounded-lg border bg-white p-2 dark:text-white [&_svg]:size-5',
		variants: {
			status: {
				error: '[&_svg]:text-amaranth-500 bg-amaranth-100 border-amaranth-400 dark:bg-amaranth-950 dark:border-amaranth-700 dark:[&_svg]:text-amaranth-400',
				warning: '[&_svg]:text-amber-500 bg-amber-100 border-amber-400 dark:[&_svg]:text-amber-400 dark:bg-amber-950 dark:border-amber-700',
				success: '[&_svg]:text-christi-500',
				info: '[&_svg]:text-royal-blue-500 bg-royal-blue-100 border-royal-blue-400 dark:bg-royal-blue-950 dark:border-royal-blue-700 dark:[&_svg]:text-royal-blue-400',
				feature: '[&_svg]:text-fiord-500 bg-fiord-100 border-fiord-400 dark:[&_svg]:text-fiord-400 dark:bg-fiord-900 dark:border-fiord-700',
			},
		},
	},
)

export type AlertVariants = VariantProps<typeof alertVariants>

export interface AlertProps {
	status: AlertVariants['status']
}

export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'
export { default as Alert } from './TheAlert.vue'
