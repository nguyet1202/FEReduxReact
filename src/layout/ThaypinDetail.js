import React, { Component } from "react";

export default class Content extends Component {
    
    render() {
        return (
            <div className="ScreenDetail">
                <div className="ScreenDetail_item">
                    <nav className="linking">
                        <a className="linking" href="http://localhost:3000/">Trang chủ</a>
                        <span className="divider">/</span>
                        <a className="linking" href="#">Sửa điện thoại SamSung</a>
                        <span className="divider">/</span>
                        <a href="#" className="linking" >Thay pin</a>
                    </nav>
                    <div></div>                   
                    <div className="detail_item">
                        
                        <p ><img className="image" src="https://cdn.fastcare.vn/fastcare/2022/04/thay-pin-iphone-8-plus-fc.jpg" /></p>
                        <div className="title">
                            <p><b>Độ vỏ iPhone Xs Max lên iPhone 13 Pro Max</b></p>
                        </div>
                        <div className="price">
                            <p><b>2.300.000đ</b></p>
                        </div>
                    </div>     
                    <hr></hr>
                    <div className="note">
                        <p><b>Giá bao gồm công thay và bảo hành, phát sinh thêm chi phí nào khác</b></p>
                    </div>
                    
                    <div className="detail_service">
                        <b>Chi tiết dịch vụ:</b>   
                        <br></br>
                        <br></br>
                    
                        <div className="detail_item1">
                            <p><i class="fas fa-check"></i>Thời gian đổi vỏ</p>
                            <p><i class="star fas fa-star"></i>60 phút</p>
                        </div> 
                        <div className="detail_item2">
                            <p><i class="fas fa-check"></i>Quy trình thay</p>
                            <p><i class="star fas fa-star"></i>Thay trực tiếp</p>
                        </div> 
                        <div className="detail_item1">
                            <p><i class="fas fa-check"></i>Tình trạng vỏ</p>
                            <p><i class="star fas fa-star"></i>mới 100%</p>
                        </div> 
                        <div className="detail_item2">
                            <p><i class="fas fa-check"></i>Quy trình thay</p>
                            <p><i class="star fas fa-star"></i>12 tháng</p>
                        </div> 

                    </div>    
                    <br></br>
                    <br></br>
                
                    <div className="detail_contact">
                        <a href="#" className="detail_contact_a"> Liên hệ trực tiếp</a>
                    
                    </div>      
                </div>    
        
            </div>
        );
    }
}
