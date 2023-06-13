import { useRouteError } from "react-router-dom"
import Menu from "./Menu"

const Error = () => {

    const routeError = useRouteError();

  return (
    <>
        <Menu />
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-danger">Error</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Esta página no existe, te recomendamos volver al inicio.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-outline-danger disabled btn-lg px-4">{routeError.error.message}</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Error