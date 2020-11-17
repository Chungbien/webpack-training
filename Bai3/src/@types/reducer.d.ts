import rootReducer from "@/reducer/reducer"

declare global {
  type AppState = ReturnType<typeof rootReducer>
}
