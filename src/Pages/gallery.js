import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import "./style/gallery.css"

function Gallery() {
    const data = [
        // {
        //     image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0059.png?raw=true",
        //     caption: "Adhyaay'19"
        // },
        // {
        //     image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0070.png?raw=true",
        //     caption: "Adhyaay'19"
        // },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_4021.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0083.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0179.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0234.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_0468.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_3451.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_4159.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_4467.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_4576.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_4894.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_5015.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_5034.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_5346.png?raw=true",
            caption: "Adhyaay'19"
        },
        {
            image: "https://github.com/ayushsom1/pictures-Adhyaay/blob/main/DSC_5360.png?raw=true",
            caption: "Adhyaay'19"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ textAlign: "center" }}>
                <h2>MOMENTS</h2>
                {/* <p>AAGAAZ : ANDAAZ : ALFAAZ</p> */}
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="950px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        // pauseIconColor="white"
                        // pauseIconSize="40px"
                        slideBackgroundColor="#211D21;"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "20px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;