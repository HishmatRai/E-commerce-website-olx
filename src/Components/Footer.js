import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './Allcss.css'

export class FooterPage extends React.Component {
    render() {
        return (
            <Footer  className="page-footer font-small pt-4 mt-4 footerBack">
                <Container className="text-left">
                    <Row>
                        <Col md="6">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Saylani online Shop</h5>
                            <p>Saylani Welfare International Trust is a Pakistani charity focusing primarily on feeding the homeless. It was established in May 1999 and is headquartered at Bahdurabad, Karachi, Pakistan. It was founded and headed by famous spiritual and religious scholar Maulana Bashir Farooq Qadri.</p>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">Log In</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="2">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register Now !</h5>
                        </li>
                        <li className="list-inline-item"><a href="#" className="btn btn-danger btn-rounded">Sign up!</a></li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i class="fab fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i class="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i class="fab fa-google-plus-g"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i class="fab fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Saylani Welfare </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;