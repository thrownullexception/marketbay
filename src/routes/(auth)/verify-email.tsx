import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/(auth)/verify-email')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>TODO "/(auth)/verify-email"!</div>
}
