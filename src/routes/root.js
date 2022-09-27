import { Header } from "../components/header/header"
import { Outlet } from "react-router-dom"

export const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}