import React,{ Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class ThaykinhDetail extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="ScreenDetail">
                <div className="ScreenDetail_item">
                <nav className="linking">
                        <a className="Itemlinking" href="http://localhost:3000/">Trang chủ</a>
                        <span className="divider">/</span>
                        <a className="Itemlinking" href="#">Sửa điện thoại SamSung</a>
                        <span className="divider">/</span>
                        <a href="#" className="linItemlinkingking" >Thay pin</a>
                        <span className="divider">/</span>
                        <a href="#" className="Itemlinking" >Chi tiết thay phần cứng</a>
                    </nav>
                    <div></div>                   
                    <div className="detail_item">
                        
                       <p ><img className="imagee" src="https://huydungmobile.com/wp-content/uploads/2021/05/thay-mat-kinh-iphone-7-plus-201x201.jpg" /></p>
                        <div className="title">
                        <p>Độ vỏ iPhone Xs Max lên iPhone 13 Pro Max</p>
                        </div>
                        <div className="price">
                        <p>2.300.000đ</p>
                        </div>
                    </div>     
                    <hr></hr>
                    <p>Giá bao gồm công thay và bảo hành, phát sinh thêm chi phí nào khác</p>
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
                        <a href="InforForm" className="detail_contact_a"> <p>Liên hệ trực tiếp</p></a>
                      
                    </div>      
                </div>    
            
            </div>
            <Footer></Footer>
            </div>
            
        );
    }
}
 