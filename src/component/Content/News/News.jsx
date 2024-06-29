import Image from 'react-bootstrap/Image';
import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/manchester.png"
import image3 from "../../../assets/uefa_champions_league.png"
import image4 from "../../../assets/manchester_city.png"
import image5 from "../../../assets/liverpool.png"
import image6 from "../../../assets/arsenal.png"
import image7 from "../../../assets/chelsea.png"
import {Accordion, Card, useAccordionButton} from "react-bootstrap";


function News() {
    return(
        <>
            <div className={"row"}>
                <div className={"col-md-6"}>
                    <div className={"big-news"}></div>
                    <ul className={"news-list"}>
                        <li>
                            <div>Utama</div>
                            <div className={"underline-news"}></div>
                        </li>
                        <li>Terbaru</li>
                        <li>Transfer</li>
                        <li>Terkini</li>
                    </ul>
                    <div className={'row'}>
                        <div className={"col-3"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                        <div className={"col-3"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                    </div>
                    <div className={'row'} style={{}}>
                        <div className={"col-6"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                        <div className={"col-6"}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                        </div>
                        <div className={"col-6"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                        <div className={"col-6"}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                        </div>
                        <div className={"col-6"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                        <div className={"col-6"}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                        </div>
                        <div className={"col-6"}>
                            <Image src={image1 ? image1 : ""} thumbnail/>
                        </div>
                        <div className={"col-6"}>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut
                                    labore</p>
                                <p>7h</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <div className={"col-6"}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <CustomToggle eventKey="0" color={"#E1AA12"}>Tim Favorit</CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className={"row"}>
                                        <div className={"col-4"}>
                                            <Image src={image2 ? image2 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-4"}>
                                            Manchester United
                                        </div>
                                        <div className={"col-4"}>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="1">
                            <Card>
                                <CustomToggle eventKey="1" color={"#E1AA12"}>Liga Populer</CustomToggle>
                                <Accordion.Collapse eventKey="1">
                                    <div className={"row"}>
                                        <div className={"col-4"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-4"}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-4"}>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="2">
                            <Card>
                                <CustomToggle eventKey="2" color={"#072446"}>Tim Populer</CustomToggle>
                                <Accordion.Collapse eventKey="2">
                                    <div className={"row"}>
                                        <div className={"col-3"}>
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
                                        <div className={"col-9"}>
                                            <div>Manchester United</div>
                                            <div>Manchester City</div>
                                            <div>Liverpool</div>
                                            <div>Arsenal</div>
                                            <div>Chelsea</div>
                                        </div>

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="3">
                            <Card>
                                <CustomToggle eventKey="3" color={"#072446"}>Liga Populer</CustomToggle>
                                <Accordion.Collapse eventKey="3">
                                    <div className={"row"}>
                                        <div className={"col-4"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-4"}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-4"}>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="4">
                            <Card>
                                <CustomToggle eventKey="4" color={"#072446"}>Semua Liga</CustomToggle>
                                <Accordion.Collapse eventKey="4">
                                    <div className={"row"}>
                                        <div className={"col-4"}>
                                            <Image src={image3 ? image3 : ""} height={"35"} width={"35"}/>
                                        </div>
                                        <div className={"col-4"}>
                                            Uefa Champions League
                                        </div>
                                        <div className={"col-4"}>
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
