import React from "react";
function ProductCard(props) {
    return (
        <React.Fragment>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card">
                    <div className="card-header bg-secondary">
                        <h6 className="text-center font-weight-bold">Mobile Image</h6>
                    </div>
                    <div className="card-body d-flex justify-content-center mt-2 p-0">
                        <img src={props.imageUrl} style={{maxWidth :"", height :"25vh"}} />
                    </div>
                    <div className="card-footer border-top-0 pb-0 bg-white text-wrap">
                        <p className="font-small m-0">{props.productName}</p>
                        <p className="m-0"><span className="font-weight-bold">&#8377;</span>{props.updatePrice} <s className="text-muted">&#8377; {props.actualPrice}</s></p>  
                    </div>
                    <p className="font-smaller text-muted text-wrap p-1">Lorem, ipsum dolor sit amet this consectetur adipisicing.</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductCard;