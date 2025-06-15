import { createRootRoute } from "@tanstack/react-router"
import { homepageRoute } from "./homepage.js"
import { authRoute } from "./auth.route.js"
import { dashboardRoute } from "./dashboard.js"

import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
    homepageRoute, 
    authRoute,
    dashboardRoute
])

