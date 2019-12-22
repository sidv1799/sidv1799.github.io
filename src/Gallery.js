import React from 'react';
import { Grid, Image, Divider } from 'semantic-ui-react';

import pic1 from './assets/about/pic1.JPG';
import pic2 from './assets/about/pic2.JPG';
import pic3 from './assets/about/pic3.jpeg';
import pic4 from './assets/about/pic4.jpeg';
import pic5 from './assets/about/pic5.jpg';
import pic6 from './assets/about/pic6.jpeg';
import pic7 from './assets/about/pic7.PNG';
import pic8 from './assets/about/pic8.jpeg';
import pic9 from './assets/about/pic9.jpg';
import pic10 from './assets/about/pic10.jpg';
import pic11 from './assets/about/pic11.jpg';

export default class Gallery extends React.Component {
    render() {
        return (
            <div className="padded-grid">
            <Grid columns={2}  >
                <Grid.Row>
                    <Grid.Column>
                        <Image src={pic2} size="large" />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={pic8} size="large" />
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src={pic6} size="large" />
                    </Grid.Column>

                    <Grid.Column>
                        <Image src={pic5} size="large"/>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src={pic1} size="large"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={pic9} size="large" />
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src={pic7} size="large" />
                    </Grid.Column>

                    <Grid.Column>
                        <Image src={pic10} size="large"/>
                        <Divider hidden/>
                        <Image src={pic3} size="large"/>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src={pic11} size="large"/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={pic4} size="large"/>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
            <Divider/>
            </div>
        );
    }
}