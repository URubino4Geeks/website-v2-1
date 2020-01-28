import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Row, Container, Column, Divider} from '../Sections'
import {H1, H2, H3, H4, H5, Title, Separator, Span, Paragraph} from '../Heading';
import {Colors, Address, Teacher, Glasses, Clock, Users, Comments, Button, RoundImage} from '../Styling';
import {Card} from '../Card';
import Link from 'gatsby-link'


const Events = () => {
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch(
            'https://assets.breatheco.de/apis/event/all',
        )
            .then(response => response.json())
            .then(data => setEvent(data))
    }, []);


    let today = new Date();

    console.log("today", today.getTime())
    {
        if (event != undefined) {
            let test = new Date(event[0].event_date)
            console.log("test", test.getTime())
        }
    }
    let newArray = event.filter((item) => new Date(item.event_date).getTime() >= today.getTime())
    console.log("newArray", newArray)
    return (
        <>
            <Carousel showIndicators={false} showThumbs={false} >

                {event &&
                    newArray.map((item, index) => {

                        return (
                            <Card key={index} borders="1.25rem" height="426px">
                                <Row
                                    height="100%"
                                    marginLeft="0"
                                    marginRight="0"
                                    customRespSize

                                >
                                    <Column size="5" customRespSize respSize="6" alignSelf="center" height="100%" image="no" border="bottom">
                                        <Row align="center" height="100%">
                                            <Column size="8" height="100%">
                                                <Divider height="50px" />
                                                <Row height="100px">
                                                    <H3 primary align="left" >{item.title}</H3>
                                                </Row>
                                                <Row>
                                                    <Separator primary />
                                                </Row>

                                                <Row>
                                                    <H3 primary align="left" >{item.event_date}</H3>
                                                    {/* <Paragraph color={Colors.blue} margin="20px 0 0 0" align="left" fontSize="13px">{item.event_date}</Paragraph> */}
                                                </Row>
                                                <Row >
                                                    <a href={item.url} target="_blank">
                                                        <Button move="down" down="75px" outline color={Colors.gray} textColor={Colors.black} margin="2rem 0" padding=".35rem.85rem">APPLY NOW</Button>
                                                    </a>
                                                </Row>
                                            </Column>
                                        </Row>

                                    </Column>
                                    <Column size="7" customRespSize respSize="6" alignSelf="center" height="100%" border="custom" customBorderRadius="0 1.25rem 1.25rem 0" image="yes" url={item.banner_url} backgroundSize="contain" >

                                    </Column>
                                </Row>
                            </Card>



                        )
                    })}
            </Carousel>

        </>
    )
};

export default Events;


{/* <Row key={index}>

<Column
    size="12"
    border="bottom"
    image="no"
    color={Colors.white}
>
    <Card shadow borders="1.25rem" height="426px">
        <Row
            height="100%"
            marginLeft="0"
            marginRight="0"
            customRespSize

        >
            <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" image="no" border="bottom">
                <Row align="center" height="100%">
                    <Column size="8" height="100%">
                        <Divider height="50px" />
                        <Row height="100px">
                            <H3 primary align="left" >LEOREM IPSUM</H3>
                            <H3 primary align="left" >AND GET CAREER</H3>
                            <H3 primary align="left" >SUPPORT FOR LIFE</H3>
                        </Row>
                        <Row>
                            <Separator primary />
                        </Row>
                        <Row height="20%">
                            <Paragraph color={Colors.gray} margin="20px 0 0 0" align="left" fontSize="13px">Join more than 500 graduates already working as coders and become a part of one of the world's biggest coding community.</Paragraph>
                        </Row>
                        <Row>
                            <Paragraph color={Colors.blue} margin="20px 0 0 0" align="left" fontSize="13px">Ligula Vulputate Sem ></Paragraph>
                        </Row>
                        <Row >
                            <Button move="down" down="75px" outline color={Colors.gray} textColor={Colors.black} margin="2rem 0" padding=".35rem.85rem">VIEW ALL PROJECTS</Button>
                        </Row>
                    </Column>
                </Row>

            </Column>
            <Column size="6" customRespSize respSize="6" alignSelf="center" height="100%" image="yes" url={item.banner_url} border="custom" customBorderRadius="0 1.25rem 1.25rem 0" />
        </Row>
    </Card>
</Column>
</Row> */}