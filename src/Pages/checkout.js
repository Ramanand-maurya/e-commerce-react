import React from "react";
import Banner from "../Components/banner";
import PageSideBar from "../Components/PageSideBar";
import "../Styles/checkout.css";
export default function Checkout(){
    return(
        <>
            <Banner pageHeding="Checkout" accountlink="/cartpage" thispagelink="/checkout" linkName1="Shopping Cart" linkName2="Checkout" />
            <div className="loginpage">
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <PageSideBar />
                    </div>
                    <div className="col-md-9 right-side">
                    <div className="row">
                        <div className="col-12">
                            <div className="panel-group" id="accordion">
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href="">Step 1: Checkout Options</a></h4>
                                    </div>
                                    <div class="panel-collapse collapse" id="collapse-checkout-option">
                                    <div class="panel-body"></div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href="" class="accordion-toggle collapsed">Step 2: Billing Details <i class="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href=""class="accordion-toggle collapsed">Step 3: Delivery Details <i class="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href="#collapse-shipping-method" class="accordion-toggle collapsed">Step 4: Delivery Method <i class="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href="#collapse-payment-method" class="accordion-toggle collapsed">Step 5: Payment Method <i class="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div class="panel-heading">
                                    <h4 class="panel-title"><a href="#collapse-checkout-confirm" class="accordion-toggle">Step 6: Confirm Order <i class="fa fa-caret-down"></i></a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}