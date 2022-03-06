import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute(props: {
  redirectPath: string
  isAllowed: boolean
}) {
  if (props.isAllowed) return <Outlet />

  return <Navigate to={props.redirectPath} replace />
}
