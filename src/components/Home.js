import React from 'react';
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
    return (
        <div className="scroll-container">
            <Container>
                <div className="section">
                    <Section
                        title="Model S"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-s.jpg"
                        leftBtnText="Custom order"
                        rightBtnText="Existing inventory"
                    />
                </div>
                <div className="section">
                    <Section
                        title="Model Y"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-y.jpg"
                        leftBtnText="Custom order"
                        rightBtnText="Existing inventory"
                    />
                </div>
                <div className="section">
                    <Section
                        title="Model 3"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-3.jpg"
                        leftBtnText="Custom order"
                        rightBtnText="Existing inventory"
                    />
                </div>
                <div className="section">
                    <Section
                        title="Model X"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom order"
                        rightBtnText="Existing inventory"
                    />
                </div>
                <div className="section">
                    <Section
                        title="Solar Panels"
                        description="Lowest Cost Solar Panels in America"
                        backgroundImg="solar-panel.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn more"
                    />
                </div>

                <div className="section">
                    <Section
                        title="Solar Roof"
                        description="Produce Clean Energy From Your Roof "
                        backgroundImg="solar-roof.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn more"
                    />
                </div>
                <div className="section">
                    <Section
                        title="Accessories"
                        description=""
                        backgroundImg="accessories.jpg"
                        leftBtnText="Shop now"
                    />
                </div>
            </Container>
        </div>

    );
};

export default Home;

const Container = styled.div`
  height:100vh;
    
`
