import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const span = tv({
  base: 'text-sm h-[21px] leading-[21px]',

  variants: {
    variant: {
      default: '',
      primary: 'font-medium text-[#B5B5C3]',
      secondary: 'font-semibold text-[#464E5F] ',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export interface ButtonProps
  extends ComponentProps<'span'>,
    VariantProps<typeof span> {}

export function Span({ className, variant, ...props }: ButtonProps) {
  return <span {...props} className={span({ variant, className })} />
}
