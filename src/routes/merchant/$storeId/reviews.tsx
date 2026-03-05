import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/merchant/$storeId/reviews')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/merchant/$storeId/reviews"!</div>
}
