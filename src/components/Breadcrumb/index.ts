import { cva, VariantProps } from 'class-variance-authority'

export const breadcrumbItemVariants = cva(
	'hover:text-blakc flex cursor-pointer items-center gap-[6px] text-sm font-medium text-gray-500 hover:underline dark:hover:text-white',
	{
		variants: {
			active: {
				true: 'text-black dark:text-white',
				false: ''
			}
		},
		defaultVariants: {
			active: false
		}
	}
)

export type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItemVariants>

export type BreadcrumbItemProps = {
	asChild?: boolean
	href: string
	active: BreadcrumbItemVariants['active']
}

export { default as BreadcrumbItem } from './BreadcrumbItem.vue'
export { default as BreadcrumbSeparator } from './BreadcrumbSeparator.vue'
export { default as BreadcrumbRoot } from './TheBreadcrumb.vue'
