import './typePreview.scss';

const TypePreview = ({ previewInfo }) => {
    
    const { type } = previewInfo;

    return (
        <div className="type-preview-container">
            <div className="type-preview-img">
                <img src={require('../../assets/png/bike-type.png')} alt={`${type}`} />
            </div>
            <h3 className="type-preview-name">{ type }</h3>
        </div>
    )
}

export default TypePreview