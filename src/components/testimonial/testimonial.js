import './testimonial.scss';

const Testimonial = ({ testimonialInfo }) => {
    
    const { firstName,lastName,occupation,remark } = testimonialInfo;

    return (
        <div className="testimonial">
            <div className="user-data">
                <div className="user-img">
                    <img src={require('../../assets/png/user.png')} alt={ `${firstName} ${lastName}` }/>
                </div>
                <div className="user-details">
                    <h4 className="name">{`${firstName} ${lastName}`}</h4>
                    <p className="occupation">{ occupation }</p>
                </div>
            </div>
            <p className="remark">{ remark }</p>
        </div>
    )
}

export default Testimonial