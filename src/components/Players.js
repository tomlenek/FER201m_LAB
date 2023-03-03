import React, { useState } from 'react'
import { ListOfPlayers } from '../shared/ListOfPlayers'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize';

function Players() {
    const [player, setPlayer] = useState('');
    return (
        <Container style={{ marginTop: 20 }}>
            <Row>
                {ListOfPlayers.map((player) => (
                    <Col s={4} key={player.id} >
                        <Card
                            header={<CardTitle image={player.img} reveal waves="light" />}
                            reveal={<p>{player.info}</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title={player.name}
                        >
                            <Link to={`detail/${player.id}`}>
                                <p style={{ textAlign: 'center' }}>Detail</p>
                            </Link>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </Container >
    )
}
export default Players;
