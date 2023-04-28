import {useEffect, useState} from "react";



const ImageGallery = ()=>{
    const[images, setImages] = useState(img1,img2,img3,img4);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(()=>{
        const handleScroll =()=>{
            const gallery = document.querySelector('.image-gallery');
            const galleryRect = gallery.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
      
            const galleryPosition = galleryRect.left;
      
            if (galleryPosition < viewportWidth) {
              const newPosition = galleryPosition + scrollPosition;
      
              setScrollPosition(newPosition);
        }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[scrollPosition]);

    const galleryStyle = {
        transform: `translateX(-${scrollPosition}px)`
      };

    return (
    <div className="image-gallery" style={galleryStyle}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`image ${index}`} />
      ))}
    </div>
  );
      };
export default ImageGallery;