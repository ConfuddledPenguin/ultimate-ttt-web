import React, { Fragment } from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './index.css';

export default class Home extends React.Component {

  render() {

    return (
      <Fragment>
        <div className='hero'>
            <Container>
                <h1>Welcome to the Ultimate TTT Workshop!</h1>
            </Container>
        </div>
        <div className='section big-links'>
            <Grid columns={ 3 }>
                    <Grid.Row>
                        <Grid.Column>
                            <h1><a href='https://socialgorithm.org/ultimate-ttt-docs' title='Documentation for Ultimate TTT'>
                                <Icon name='book' /><br/ >
                                Documentation
                            </a></h1>
                        </Grid.Column>
                        <Grid.Column>
                            <h1><NavLink to='/match'>
                                <Icon name='game' /><br/ >
                                Create Match
                            </NavLink></h1>
                        </Grid.Column>
                        <Grid.Column>
                            <h1><NavLink to='/replay'>
                                <Icon name='lab' /><br/ >
                                Analyse Games
                            </NavLink></h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </div>
        <div className='bg-secondary section'>
            <p>If it is the first time you're here, go to our Documentation above and read through the "Getting Started " section.</p>
            <p>Remember that you can always <a href='https://socialgorithm-slack.herokuapp.com/'>join our Slack community</a> to ask for help from our mentors!</p>
        </div>
      </Fragment>
    );
  }
}