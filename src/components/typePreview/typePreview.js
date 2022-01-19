import './typePreview.scss';

const TypePreview = ({ previewInfo, selectedType, setSelectedType }) => {
    
    const { type } = previewInfo;

    return (
        <div className={`type-preview-container ${selectedType === type ? "selected-type" : ""}`} onClick={()=>setSelectedType(type)}>
            <div className="type-preview-img">
                <img src={require('../../assets/png/bike-type.png')} alt={`${type}`} />
            </div>
            <h3 className="type-preview-name">{ type }</h3>
        </div>
    )
}

export default TypePreview