const ImageCard = props => {
    const {height, width, urls, alt_description} = props.image;
    const scaledHeight = height * 250 / width;
    const spans = Math.ceil(scaledHeight / 10);
 
    return (
      <div style={‌{gridRowEnd: `span ${spans}`}}>
        <img src={urls.small} alt={alt_description} />
      </div>
    );
}
 
export default ImageCard;