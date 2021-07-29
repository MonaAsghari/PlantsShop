import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy;
                    <a href="mona.asghari2021@gmail.com"> Mona Asghari </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer
