import React, {Component,PropTypes} from 'react';
import {Container} from '../../theme/grid';
import {
    Image,
    HeroImage
} from './Home.style';

export default class Home  extends Component{
    static propTypes = {};
  render() {
    return (
        <React.Fragment>
            <Container>
                {/* <Image src={require('../../assets/top.jpg')} alt='top-image'/> */}
                <HeroImage>

                    <h1>Tatsujiro</h1>
                    <h2>Front-end Deveropper </h2>
                </HeroImage>
                <p>
                    My name is tatsujiro. nice to meet you.
                    I am learning react.js

                </p>
            </Container>
        </React.Fragment>
    );
  }
}