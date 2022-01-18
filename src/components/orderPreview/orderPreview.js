import Lottie from "react-lottie"
import RiderAnimationData from '../../assets/lottie/rider-lottie.json'
import './orderPreview.scss';


const OrderPreview = ({ bikeInfo }) => {
    const { name, price, bikeImg, animated } = bikeInfo;

    const lottieSettings = {
        loop: true,
        autoplay: true,
        animationData: RiderAnimationData,
    }

    return (
        <div className="order-preview-container">       
            {
                animated ? 
                <div className="order-preview-lottie">
                    <Lottie
                        options={lottieSettings}
                        width={242}
                        height={242}
                    />
                </div>
                :
                <div className="order-preview">
                    <h3 className="bike-name">{ name }</h3>
                    <div className="bike-img">
                        <img src={bikeImg} alt={`${name}`} />
                    </div>
                </div>
            }
            <div className="price-details-container">
                <div className="price-details">
                    <h5 className="title">Price</h5>
                    <h4 className="price">{`$ ${price}`}</h4>
                </div>
                <button className="order-btn">Order</button>
            </div>
        </div>
    )
}

export default OrderPreview;