import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "@/constants/paths"
import Loading from "@/components/Loading/Loading"
const Login = lazy(() => import("@/pages/Login/Login"))

export default function LoginRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        )}
      />
    </Switch>
  )
}
