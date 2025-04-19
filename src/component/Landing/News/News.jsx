import Image from 'react-bootstrap/Image';
import imageThumb from "../../../assets/image2.png"
import image2 from "../../../assets/manchester.png"
import image3 from "../../../assets/uefa_champions_league.png"
import image4 from "../../../assets/manchester_city.png"
import image5 from "../../../assets/liverpool.png"
import image6 from "../../../assets/arsenal.png"
import image7 from "../../../assets/chelsea.png"
import favoriteStar from "../../../assets/favorite_star.png"
import {Accordion, Card, useAccordionButton} from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { fetchDataHeadlineNews, fetchDataThumbnailNews } from '../../../service/LandingPageService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // for default styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function News() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


    const [headlineNews, setHeadlineNews] = useState([]);
    const [thumbailNews, setThumbnailNews] = useState([]);
    const [loadingHeadlineNews, setLoadingHeadlineNews] = useState(true); 

    useEffect(() => {
            fetchDataHeadlineNews(1, 10).then((result) => {
                setHeadlineNews(result.data);
            }).catch(error => {
            console.error('Failed to fetch headline news:', error);
            }).finally(() => setLoadingHeadlineNews(false));
        }, []);
    
    useEffect(() => {
        fetchDataThumbnailNews(1, 10).then((result) => {
            setThumbnailNews(result.data);
        }).catch(error => {
            console.error('Failed to fetch thumbnail news:', error);
        });
    },[])

    return(
        <>
            <div className={"row"}>
                <div className={"col-md-8"}>
                    {
                        (loadingHeadlineNews) ? <Skeleton height={300} width={800} /> : (<div className={"big-news-wrapper"}><div className={"big-news"}></div></div>)
                    }
                    <ul className={"news-list"} style={{cursor:"pointer"}}>
                        <li>
                            <div>Utama</div>
                            <div className={"yellow-slider"}></div>
                            <div className={"underline-news"}></div>
                        </li>
                        <li>Terbaru</li>
                        <li>Transfer</li>
                        <li>Terkini</li>
                    </ul>
                    <div>
                        {headlineNews.length > 0 ? 
                            <Slider {...settings} >
                                 {
                                headlineNews.map((data, index) => (
                                    <div key={index}>
                                        <div style={{backgroundColor: 'red',marginRight: '20px'}} className='headline-news-image'>
                                            <Image className="testimage" src={data ? headlineNews[index].image : ""} alt={`Slide ${index}`} width={'100%'} height={"100%"} style={{borderRadius: ".4rem"}}/>
                                        </div>
                                    
                                    </div>
                                ))
                            }
                            </Slider> 
                            : <Skeleton height={300} width={800}/>
                            }
                    </div>
                    <div className={'row'} id={"go-news-thumbnail"}>
                        <div className={"col-md-3"}>
                            <Image src={imageThumb ? imageThumb : ""} width={"100%"} height={"100%"}
                                        style={{objectFit: "cover", borderRadius: ".4rem"}}/>
                        </div>
                        <div className={"pl-5 col-md-9 row"}>
                            <div className={"col-11"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                            <div className={"col-1"} style={{cursor: "pointer", position: "relative", left: "2.2rem"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-ellipsis-vertical">
                                    <circle cx="12" cy="12" r="1"/>
                                    <circle cx="12" cy="5" r="1"/>
                                    <circle cx="12" cy="19" r="1"/>
                                </svg>
                            </div>
                        </div>
                        <div className={"col-md-3"}>
                        <Image src={imageThumb ? imageThumb : ""} width={"100%"} height={"100%"}
                                       style={{objectFit: "cover", borderRadius: ".4rem"}}/>
                        </div>
                        <div className={"pl-5 col-md-9 row"}>
                            <div className={"col-11"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                            <div className={"col-1"} style={{cursor: "pointer", position: "relative", left: "2.2rem"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-ellipsis-vertical">
                                    <circle cx="12" cy="12" r="1"/>
                                    <circle cx="12" cy="5" r="1"/>
                                    <circle cx="12" cy="19" r="1"/>
                                </svg>
                            </div>
                        </div>
                        <div className={"col-md-3"}>
                        <Image src={imageThumb ? imageThumb : ""} width={"100%"} height={"100%"}
                                       style={{objectFit: "cover", borderRadius: ".4rem"}}/>
                        </div>
                        <div className={"pl-5 col-md-9 row"}>
                            <div className={"col-11"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                            <div className={"col-1"} style={{cursor: "pointer", position: "relative", left: "2.2rem"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-ellipsis-vertical">
                                    <circle cx="12" cy="12" r="1"/>
                                    <circle cx="12" cy="5" r="1"/>
                                    <circle cx="12" cy="19" r="1"/>
                                </svg>
                            </div>
                        </div>
                        <div className={"col-md-3"}>
                        <Image src={imageThumb ? imageThumb : ""} width={"100%"} height={"100%"}
                                       style={{objectFit: "cover", borderRadius: ".4rem"}}/>
                        </div>
                        <div className={"pl-5 col-md-9 row"}>
                            <div className={"col-11"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                            <div className={"col-1"} style={{cursor: "pointer", position: "relative", left: "2.2rem"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-ellipsis-vertical">
                                    <circle cx="12" cy="12" r="1"/>
                                    <circle cx="12" cy="5" r="1"/>
                                    <circle cx="12" cy="19" r="1"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-md-4"} style={{backgroundColor: ''}}>
                    <div className={"col-12"} id={"go-accordion"}>
                        <Accordion defaultActiveKey="0" style={{marginBottom: "2rem"}}>
                            <Card>
                                <CustomToggle eventKey="0" color={"#E1AA12"}>Tim Favorit</CustomToggle>
                                <Accordion.Collapse eventKey="0" className={"pt-2 pb-2"}>
                                    <div className={"row pl-4 pr-4"}>
                                        <div className={"col-2"}>
                                            <Image src={image2 ? image2 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-8 pl-4 pt-1 pr-1"} style={{fontSize: ".8rem"}}>
                                            Manchester United
                                        </div>
                                        <div className={"col-2"}>
                                            <Image src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion defaultActiveKey="1" style={{marginBottom: "2rem"}}>
                            <Card>
                            <CustomToggle eventKey="1" color={"#E1AA12"}>Liga Populer</CustomToggle>
                                <Accordion.Collapse eventKey="1" className={"pt-2 pb-2"}>
                                    <div className={"row pl-4 pr-4"}>
                                        <div className={"col-2"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-8 pl-4 pt-1 pr-1"} style={{fontSize:".8rem"}}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-2"}>
                                            <Image src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion >

                        <Accordion defaultActiveKey="2" style={{marginBottom:"2rem"}}>
                            <Card>
                                <CustomToggle eventKey="2" color={"#072446"}>Tim Populer</CustomToggle>
                                <Accordion.Collapse eventKey="2" className={"pt-2 pb-2"}>
                                    <div className={"row pl-4 pr-4"} id={'go-team-popular'}>
                                        <div className={"col-3"} id={'go-team-popular-image'}>
                                            <div>
                                                <Image src={image2 ? image2 : ""} height={"35"} width={"35"}/>
                                            </div>
                                            <div>
                                                <Image src={image4 ? image4 : ""} height={"35"} width={"35"}/>
                                            </div>
                                            <div>
                                                <Image src={image5 ? image5 : ""} height={"35"} width={"35"}/>
                                            </div>
                                            <div>
                                                <Image src={image6 ? image6 : ""} height={"35"} width={"35"}/>
                                            </div>
                                            <div>
                                                <Image src={image7 ? image7 : ""} height={"35"} width={"35"}/>
                                            </div>
                                        </div>
                                        <div className={"col-9"} id={'go-team-popular-desc'}>
                                            <div>Manchester United
                                                <div className={"d-inline-block"}> <Image src={favoriteStar? favoriteStar : ""} height={"15"} width={"15"}/></div>
                                            </div>
                                            <div>Manchester City
                                                <div className={"d-inline-block"}><Image
                                                    src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                                </div>
                                            </div>
                                            <div>Liverpool
                                                <div className={"d-inline-block"}><Image
                                                    src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                                </div>
                                            </div>
                                            <div>Arsenal
                                                <div className={"d-inline-block"}><Image
                                                    src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                                </div>
                                            </div>
                                            <div>Chelsea
                                                <div className={"d-inline-block"}><Image
                                                    src={favoriteStar ? favoriteStar : ""} height={"15"} width={"15"}/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="3" style={{marginBottom:"2rem"}}>
                            <Card>
                                <CustomToggle eventKey="3" color={"#072446"}>Liga Populer</CustomToggle>
                                <Accordion.Collapse eventKey="3" className={"pt-2 pb-2"}>
                                    <div className={"row pl-4 pr-4"}>
                                        <div className={"col-2"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-8 pl-4 pt-1 pr-1"} style={{fontSize: ".8rem"}}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-2"}>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion >
                        <Accordion defaultActiveKey="4" style={{marginBottom:"2rem"}}>
                            <Card>
                                <CustomToggle eventKey="4" color={"#072446"}>Semua Liga</CustomToggle>
                                <Accordion.Collapse eventKey="4" className={"pt-2 pb-2"}>
                                    <div className={"row pl-4 pr-4"}>
                                        <div className={"col-2"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-8 pl-4 pt-1 pr-1"} style={{fontSize: ".8rem"}}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-2"}>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

function CustomToggle({children, eventKey,color}) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={
                {
                    color: "white",
                    backgroundColor: color,
                    border: "none",
                    width: "100%",
                    borderTopRightRadius: "9px",
                    borderTopLeftRadius: "9px",
                    height: 60
                }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}


export default News;
