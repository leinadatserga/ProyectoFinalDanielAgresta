const Error404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center alert alert-danger bg-primary bg-opacity-50 border border-danger">
                   <h1><b>ERROR 404</b></h1>
                   <h2><b>La página que busca no existe!</b></h2> 
                </div>
            </div>
        </div>
    )
}

export default Error404;