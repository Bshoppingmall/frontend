function Detail(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="../../public/1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.games[0].title}</h4>
                    <p>{props.games[0].content}</p>
                    <p>{props.games[0].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;