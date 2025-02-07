import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
	base: 'select-none',
	variants: {
		color: {
			default: '',
			primary: '',
			success: '',
			danger: ''
		},
		variant: {
			solid: 'text-white border-0',
			outlined: 'bg-tranparent border'
		}
	},
	compoundVariants: [
		{
			color: 'default',
			variant: 'solid',
			class: 'bg-fiord-500'
		},
		{
			color: 'primary',
			variant: 'solid',
			class: 'bg-royal-blue-500'
		},
		{
			color: 'success',
			variant: 'solid',
			class: 'bg-christi-500'
		},
		{
			color: 'danger',
			variant: 'solid',
			class: 'bg-amaranth-500'
		},
		{
			color: 'default',
			variant: 'outlined',
			class: 'border-fiord-400 text-fiord-400'
		},
		{
			color: 'primary',
			variant: 'outlined',
			class: 'border-royal-blue-400 text-royal-blue-400'
		},
		{
			color: 'success',
			variant: 'outlined',
			class: 'border-christi-400 text-christi-400'
		},
		{
			color: 'danger',
			variant: 'outlined',
			class: 'border-amaranth-400 text-amaranth-400'
		}
	],
	defaultVariants: {
		color: 'default',
		variant: 'outlined'
	}
})

type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps {
	color?: BadgeVariants['color']
	variant?: BadgeVariants['variant']
}

export { default as Badge } from './TheBadge.vue'
