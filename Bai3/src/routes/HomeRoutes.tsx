import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import AuthenticatedGuard from "@/guards/AuthenticatedGuard"
import { PATH } from "@/constants/paths"
import Loading from "@/components/Loading/Loading"
const Home = lazy(() => import("@/pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Switch>
  )
}
