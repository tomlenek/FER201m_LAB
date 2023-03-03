import React from 'react'
import { Carousel } from 'react-materialize'
function About() {
    return (
        <Carousel
            carouselId="Carousel-98"
            images={[
                'assets/images/faker.jpg',
                'assets/images/chovy.jpg',
                'assets/images/deft.jpg',
                'assets/images/canyon.jpg',
                'assets/images/peanut.jpg',
                'assets/images/gumayushi.jpg',
                'assets/images/morgan.jpg',
                'assets/images/zeus.jpg',
                'assets/images/viper.jpg'
            ]}
            options={{
                dist: -100,
                duration: 200,
                fullWidth: false,
                indicators: false,
                noWrap: false,
                numVisible: 7,
                onCycleTo: null,
                padding: 0,
                shift: 0,

            }}
        />
    )
}
export default About;