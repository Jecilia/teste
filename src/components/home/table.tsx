import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
  return (
    <table
      {...props}
      className={twMerge('w-[1085px] rounded-md  text-xs', props.className)}
    />
  )
}

interface TableHeaderProps extends ComponentProps<'thead'> {}

export function TableHeader(props: TableHeaderProps) {
  return <thead {...props} className={twMerge('bg-bgApp ', props.className)} />
}

interface TableHeadProps extends ComponentProps<'th'> {}

export function TableHead(props: TableHeadProps) {
  return (
    <th
      {...props}
      className={twMerge(
        'text-greyLite p-4 text-left text-xs font-semibold',
        props.className,
      )}
    />
  )
}

interface TableBodyProps extends ComponentProps<'tbody'> {}

export function TableBody(props: TableBodyProps) {
  return <tbody {...props} />
}

interface TableRowProps extends ComponentProps<'tr'> {}

export function TableRow(props: TableRowProps) {
  return <tr {...props} />
}

interface TableCellProps extends ComponentProps<'td'> {}

export function TableCell(props: TableCellProps) {
  return <td {...props} className={twMerge('px-4 py-3', props.className)} />
}
