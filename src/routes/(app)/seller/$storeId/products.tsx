import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/(app)/seller/$storeId/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/st-admin/$storeId/products"!</div>
}
