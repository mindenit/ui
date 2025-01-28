import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
	variants: {
		color: {
			default: 'border-fiord-400 text-fiord-400',
			primary: 'border-royal-blue-400 text-royal-blue-400',
			success: 'border-christi-400 text-christi-400',
			danger: 'border-amaranth-400 text-amaranth-400'
		}
	},
	defaultVariants: {
		color: 'default'
	}
})

type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps {
	color: BadgeVariants['color']
}

export { default as Badge } from './TheBadge.vue'
