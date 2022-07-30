import {Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from 'hamburger-react'
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useLoadingWithRefresh } from '../hooks/useLoadingWithRefresh';
const AboutUs = () => {
    
       const {loading}= useLoadingWithRefresh();
       return loading?(
           <Loader/>
       ):(
        <div>
           
            <style dangerouslySetInnerHTML={{ __html: "\n        .ie-panel {\n            display: none;\n            background: #212121;\n            padding: 10px 0;\n            box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, .3);\n            clear: both;\n            text-align: center;\n            position: relative;\n            z-index: 1;\n        }\n\n        html.ie-10 .ie-panel,\n        html.lt-ie-10 .ie-panel {\n            display: block;\n        }\n    " }} />
        
            <div className="page">
                {/* Page Header*/}
                <section className="section page-header-3 header-section">
                <Navbar collapseOnSelect expand="lg" className='rd-navbar-nav-wrap toggle-original-elements active color-nav ' variant="dark" >
              <Container >
                <Navbar.Brand href="#home" className='order-md-0 mx-auto order-1'>
                  <img  className=" brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="order-md-1 order-0" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto nav-font nav-menu" style={{marginLeft: '20%'}}>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/about_us"><FontAwesomeIcon icon="fa-solid fa-id-card" />About Us</Link></Nav.Link>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/careers">Careers</Link></Nav.Link>
                    <NavDropdown title="Account" id="collasible-nav-dropdown" className="rd-nav-link nav-font">
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">View Dashboard</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Log Out</Link></NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link ><Link className="rd-nav-link nav-font" to="/contact_us">Contact Us</Link></Nav.Link>
                  </Nav>
                  <Nav className="me-auto nav-font" >
                    <NavDropdown title="More" id="collasible-nav-dropdown">
                      <NavDropdown.Item ><Link className="rd-nav-link " to="/">View Dashboard</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/">Log Out</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/about_us">Privacy Policy</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/our_team">Our Team</Link></NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/login">Login</Link></NavDropdown.Item>
                      <NavDropdown.Item ><Link className="rd-nav-link" to="/register">Register</Link></NavDropdown.Item>

                    </NavDropdown>
                  </Nav>

                </Navbar.Collapse>
                <Nav >
                  <div className="rd-navbar-element rd-navbar-element_centered">
                    <div className="group-xs" style={{marginRight:'15px'}}>
                      <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart"><span className="add-xs" id="cart-no">
                        0
                      </span></Link>
                    </div>

                  </div>
                </Nav>
                <Nav>
                  <div className="rd-navbar-element rd-navbar-element_right">
                    <div id="google_translate_element" >

                    </div>
                    <ul className="list-localization">
                      <li>
                        <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                          0
                        </span></a>
                      </li>
                      <li>
                        <label>
                          <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text">English</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </Nav>
              </Container>
            </Navbar>

            {/* end of perfect nav  */}

                        {/* <div className="rd-navbar-wrap" style={{ height: '76px' }}>
                            <nav className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static rd-navbar--is-stuck" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="0px" data-xl-stick-up-offset="0px" data-xxl-stick-up-offset="0px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                                <div className="rd-navbar-main">
                                    
                                    <div className="rd-navbar-panel">
                                        
                                        <button className="rd-navbar-toggle toggle-original" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span /></button>
                                        
                                        <div className="rd-navbar-brand"><Link className="brand" to="/"><img className="brand-logo-dark" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /><img className="brand-logo-light" src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></Link></div>
                                    </div>
                                    <div className="rd-navbar-nav-wrap toggle-original-elements"><Link href="/">
                                        <p className="rd-navbar-slogan rd-navbar-slogan-2 text-white-50 wow clipInLeft animated" style={{ visibility: 'visible', animationName: 'clipInLeft' }}>Cool IoT
                                            Company</p>
                                    </Link>
                                        
                                        <ul className="rd-navbar-nav">
                                            <li className="rd-nav-item active">
                                                <Link to="/" className="rd-nav-link" id="home-tab">
                                                    <i className="fa fa-fw fa-home" id="icon-view-home" />Home
                                                </Link>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/about_us">
                                                    <i className="fa fa-fw fa-drivers-license-o mr-3 ml-3" id="icon-view" />About
                                                Us</Link>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/careers">
                                                    <i className="fa fa-fw fa-graduation-cap mr-3" id="icon-view" />Careers</Link>
                                            </li>
                                            <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu"><a className="rd-nav-link" href="#">
                                                <i className="fa fa-fw fa-user-circle-o mr-3" id="icon-view" />Account</a><span className="rd-navbar-submenu-toggle" />
                                                <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                                    <ul className="rd-navbar-megamenu-inner-acc">
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">View Dashboard</a>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Logout</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="rd-nav-item">
                                                <Link className="rd-nav-link" to="/contact_us"><i className="fa fa-fw fa-phone mr-3 ml-4" id="icon-view" />Contact Us</Link>
                                            </li>
                                            <li className="rd-nav-item rd-navbar--has-megamenu rd-navbar-submenu">
                                                <a className="rd-nav-link more-navbar" href="#" id="more-tab">
                                                    <i className="fa fa-fw fa-server" id="icon-view-more" />More
                                                </a><span className="rd-navbar-submenu-toggle" />
                                                <div className="rd-menu rd-navbar-megamenu rd-navbar-open-right">
                                                    <ul className="rd-navbar-megamenu-inner">
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/our_team">Our
                                                                    Team</Link></li>
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">FAQ</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><a className="rd-megamenu-list-link" href="#">Privacy policy</a>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/our_team">Our
                                                                    Team</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li className="rd-megamenu-item">
                                                            <ul className="rd-megamenu-list">
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" to="/login">Login</Link>
                                                                </li>
                                                                <li className="rd-megamenu-list-item"><Link className="rd-megamenu-list-link" href="/register">Register</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <hr style={{ height: '2px' }} />
                                        </ul>
                                       
                                        <div className="rd-navbar-element rd-navbar-element_centered">
                                            <div className="group-xs">
                                                <Link className="icon icon-sm link-social-2 mdi mdi-cart-outline cart-icon" id="cart-size-1" to="/cart"><span className="add-xs" id="cart-no">
                                                    0
                                                </span></Link>
                                            </div>
                                            <div>
                                                <a className="icon icon-sm link-social-2 mdi mdi-facebook" href="#" id="handle-view" />
                                                <a className="icon icon-sm link-social-2 mdi mdi-twitter" href="#" id="handle-view" />
                                                <a className="icon icon-sm link-social-2 mdi mdi-instagram" href="#" id="handle-view" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rd-navbar-element rd-navbar-element_right">
                                        <div id="google_translate_element" style={{ display: 'none' }}>
                                            <div className="skiptranslate goog-te-gadget" dir="ltr" style={{}}>
                                                <div id=":0.targetLanguage" className="goog-te-gadget-simple" style={{ whiteSpace: 'nowrap' }}><img src="./MIBAiO Home_files/cleardot.gif" className="goog-te-gadget-icon" alt="" style={{ backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px' }} /><span style={{ verticalAlign: 'middle' }}><a aria-haspopup="true" className="goog-te-menu-value" href="javascript:void(0)"><span>Select
                                                    Language</span><img src="./MIBAiO Home_files/cleardot.gif" alt="" width={1} height={1} /><span style={{ borderLeft: '1px solid rgb(187, 187, 187)' }}>​</span><img src="images/cleardot.gif" alt="" width={1} height={1} /><span aria-hidden="true" style={{ color: 'rgb(118, 118, 118)' }}>▼</span></a></span></div>
                                            </div>
                                        </div>
                                        <ul className="list-localization">
                                            <li>
                                                <a className="icon icon-sm link-social-2 mdi mdi-cart-outline mr-2" id="cart-size" href="#"><span className="add-xs" id="cart-no">
                                                    0
                                                </span></a>
                                            </li>
                                            <li>
                                                <label>
                                                    <input id="Marathi" name="localization" defaultValue="Marathi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">मराठी</span></span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input id="English" name="localization" defaultValue="English" type="radio" defaultChecked="checked" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text">English</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input id="Hindi" name="localization" defaultValue="Hindi" type="radio" autoComplete="Off" className="radio-custom" /><span className="radio-custom-dummy" /><span className="label-text"><span className="notranslate">हिंदी</span></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rd-navbar-dummy" />
                                </div>
                            </nav>
                        </div> */}
                </section>
                <section className="breadcrumbs-custom">
                    <div className="breadcrumbs-custom-main bg-default">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9">
                                    <h3 className="text-white breadcrumbs-custom-title">A Few Words About Us</h3>
                                </div>
                            </div>
                        </div>
                        <div className="breadcrumbs-custom-aside">
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="index.php">Home</a></li>
                                <li className="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Who we Are*/}
                <section className="section section-md">
                    <div className="container">
                        <div className="row row-50 align-items-center">
                            <div className="col-md-8 col-lg-7">
                                <h3>We're a Passionate Team of Innovators!</h3>
                                <p className="text-gray-900">Our mission is <strong>"To make India known for quality design and
                technology"</strong><br />Our team strives towards innovation. We are commited to provide
              our customers a futuristic experience of modern Smart homes using MIBAiO, at an affordable
              cost to every Indian household.</p>
                                {/* Quote Light*/}
                                <blockquote className="quote-light quote-light_1">
                                    <div className="quote-light-mark linearicons-quote-open" />
                                    <div className="quote-light-text">
                                        <p><strong>We are here to change the Smart Home Ecosystem in India </strong>- and we
                  invite you to take a front seat in this revolution.</p>
                                    </div>
                                </blockquote>
                                <blockquote className="quote-light quote-light_1">
                                    <div className="quote-light-mark linearicons-quote-open" />
                                    <div className="quote-light-text">
                                        <p><strong>We automate every electronic device in your home</strong><br />You can use our
                  in-house application or this website to control and monitor all of your electronic
                  appliances from wherever you want, whenever you want</p>
                                    </div>
                                </blockquote>
                            </div>
                            <div className="col-md-4 col-lg-5">
                                <div className="phone-frame-1_mod-1">
                                    <div className="phone-frame-1"><img src="images/iphone-frame-1-523x517.png" alt="" width={523} height={517} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About*/}
                <section className="section section-md bg-gray-100">
                    <div className="container">
                        <div className="isotope row row-30" data-isotope-layout="masonry" data-isotope-group="about">
                            <div className="col-12 col-sm-6 col-md-4 isotope-item">
                                <div className="block-ratio block-ratio-1">
                                    <div className="block-ratio-dummy" />
                                    <div className="block-ratio-content">
                                        <div className="box-custom-1">
                                            <h2>1270+</h2>
                                            <h4 className="extra-lighter">Hours of <br /> Hard work</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Welcome to Team*/}
                <section className="section text-center">
                    <div className="container">
                        <div className="list-blocks-outer">
                            <div className="list-blocks">
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">Creative Space</p>
                                        <p>Our office is a creative space for you to work
                  seamlessly, without any interruptions!</p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">Cookies</p>
                                        <p>We are well experienced with the fact that "Hunger achhe achho ko badal deta hai".
                  Don't worry, we've got your snacks covered!</p>
                                    </div>
                                </div>
                                <div className="list-blocks-item list-blocks-item_caption">
                                    <div className="list-blocks-item-inner">
                                        <h3>Join Our <br className="d-none d-sm-block" /> Team</h3><a className="button button-secondary button-winona" href="careers.html">Browse
                  Vacancies</a>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">Growing Career</p>
                                        <p>As a start-up we have a huge career lined up in front of us. Various positions are
                  open. Grab the opportunity!</p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">Benefits</p>
                                        <p>"Experience is the only teacher we have" -Swami Vivekananda <br />You'll gain a lot of
                  experience working <strong>with </strong>MIBAiO team to enhance your career. </p>
                                    </div>
                                </div>
                                <div className="list-blocks-item">
                                    <div className="list-blocks-item-inner">
                                        <div className="list-blocks-counter" />
                                        <p className="list-blocks-title">Collaboration</p>
                                        <p>Career at MIBAiO is beneficial for you as we have collaborations with
                  government as well as private firms.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* People Ready to Change the World */}
                <section className="section section-md bg-gray-100 text-center">
                    <div className="container"><span className="normal text-primary font-weight-bold text-uppercase wow fadeIn">meet our team</span>
                        <h3 className="offset-top-7 font-weight-regular typed-text-heading wow fadeIn" data-wow-delay=".1s">People that Shape Our Success</h3>
                        {/* Owl Carousel*/}
                        <div className="owl-carousel owl-carousel_profile-modern" data-items={1} data-sm-items={2} data-lg-items={3} data-xl-items={4} data-dots="true" data-nav="false" data-stage-padding={0} data-loop="true" data-margin={30} data-mouse-drag="false">
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-1-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Vedant S. Mane</h4>
                                        <p className="profile-modern-position">Founder &amp; CEO</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-2-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Dr. Gaurav Bansod</h4>
                                        <p className="profile-modern-position">Mentor</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-3-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Aditya Nerpagar</h4>
                                        <p className="profile-modern-position">Hardware Developer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-4-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Shlok Shaha</h4>
                                        <p className="profile-modern-position">Web Developer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-5-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Nishad Potdar</h4>
                                        <p className="profile-modern-position">Interface Designer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-6-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Advait Chandorkar</h4>
                                        <p className="profile-modern-position">Firmware Engineer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-7-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Akshit Madan</h4>
                                        <p className="profile-modern-position">App Developer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                            {/* Profile Modern*/}
                            <article className="profile-modern">
                                <figure className="profile-modern-figure"><img className="profile-modern-image" src="images/team-8-369x315.jpg" alt="" width={369} height={315} />
                                </figure>
                                <div className="profile-modern-main">
                                    <div className="profile-modern-main-item profile-modern-main-item_primary">
                                        <h4 className="profile-modern-name">Anagh Mirji</h4>
                                        <p className="profile-modern-position">UI/UX Designer</p>
                                    </div>
                                    <div className="profile-modern-main-item profile-modern-main-item_secondary">
                                        <h4 className="profile-modern-main-title extra-lighter">Get in Touch</h4>
                                        <ul className="list-inline list-inline-xs">
                                            <li><a className="icon icon-md mdi mdi-facebook" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-twitter" href="#" /></li>
                                            <li><a className="icon icon-md mdi mdi-instagram" href="#" /></li>
                                        </ul>
                                        <div className="profile-modern-toggle mdi mdi-arrow-top-right" />
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="section oh">
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-between">
                            <div className="col-md-10 col-lg-5 col-xl-4">
                                <div className="section-md"><span className="normal-2 text-primary font-weight-bold text-uppercase wow fadeIn">Our History</span>
                                    <h3>Our Path to Global Success</h3>
                                    <p className="big offset-top-3">Our Research paper has been published in IEEE Xplore® Journal.</p><a className="button button-secondary button-winona" href="https://ieeexplore.ieee.org/document/9410775" target="_blank">Read Research</a>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-7">
                                {/* Timeline*/}
                                <div className="timeline-classic timeline-classic_1">
                                    <div className="timeline-classic-item">
                                        <div className="timeline-classic-item-inner">
                                            <div className="timeline-classic-item-decoration" />
                                            <p className="timeline-classic-title"><span className="text-primary">November 2020.</span><span>The Early Days</span></p>
                                            <div className="timeline-classic-text">
                                                <p>MIB-AIO was in the ideation stage where our founder was doing his research on it as a final year BE project. This is when we realised our project could be made into a commercial product.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-classic-item">
                                        <div className="timeline-classic-item-inner">
                                            <div className="timeline-classic-item-decoration" />
                                            <p className="timeline-classic-title"><span className="text-primary">April 2021.</span><span>Establishment</span></p>
                                            <div className="timeline-classic-text">
                                                <p>On the Auspicious day of Gudhi Padwa (New Year), Our Company was incorporated officially by Govt of India.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-classic-item">
                                        <div className="timeline-classic-item-inner">
                                            <div className="timeline-classic-item-decoration" />
                                            <p className="timeline-classic-title"><span className="text-primary">August 2021.</span><span>Startup Incubation</span></p>
                                            <div className="timeline-classic-text">
                                                <p>Our company, Mibaio Elmec Smart Automation Pvt Ltd got incubated at PICT-EDC and we started our offline operations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="timeline-classic-item">
                                        <div className="timeline-classic-item-inner">
                                            <div className="timeline-classic-item-decoration" />
                                            <p className="timeline-classic-title"><span className="text-primary">March 2022.</span><span>Worldwide Recognition</span></p>
                                            <div className="timeline-classic-text">
                                                <p>Some nice tect needs to be added over here.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials*/}
                <section className="parallax-container section-lg bg-accent text-center" data-parallax-img="images/bg-image-6.jpg">
                    <div className="parallax-content">
                        <div className="container"><span className="normal text-white font-weight-bold text-uppercase wow fadeIn">Testimonials</span>
                            <h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">What Users Think About Us</h3>
                            <div className="owl-carousel owl-carousel_type-1" data-items={1} data-dots="true" data-nav="true" data-stage-padding={0} data-loop="true" data-margin={30} data-mouse-drag="false">
                                {/* Quote Classic*/}
                                <blockquote className="quote-classic"><img className="quote-classic-avatar" src="images/testimonials-1-102x102.jpg" alt="" width={102} height={102} />
                                    <div className="quote-classic-text">
                                        <p>Sed odio morbi quis commodo odio. Sed tempus urna et pharetra pharetra massa massa. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Ornare lectus sit amet est placerat in egestas erat. Amet volutpat consequat mauris.</p>
                                    </div>
                                    <div className="quote-classic-meta">
                                        <cite className="quote-classic-cite">Alice Doe</cite>
                                        <p className="quote-classic-position">Regular Customer</p>
                                    </div>
                                </blockquote>
                                {/* Quote Classic*/}
                                <blockquote className="quote-classic"><img className="quote-classic-avatar" src="images/testimonials-2-102x102.jpg" alt="" width={102} height={102} />
                                    <div className="quote-classic-text">
                                        <p>Ubi est clemens usus? Cursuss peregrinatione in nobilis avenio! Volare ducunt ad ignigena. Amors potus! Mirabilis sectam nunquam manifestums cursus est. Ferox, azureus sagas mechanice quaestio de peritus, domesticus accola.</p>
                                    </div>
                                    <div className="quote-classic-meta">
                                        <cite className="quote-classic-cite">John Williams</cite>
                                        <p className="quote-classic-position">Regular Customer</p>
                                    </div>
                                </blockquote>
                                {/* Quote Classic*/}
                                <blockquote className="quote-classic"><img className="quote-classic-avatar" src="images/testimonials-3-102x102.jpg" alt="" width={102} height={102} />
                                    <div className="quote-classic-text">
                                        <p>Est audax lanista, cesaris. Nunquam acquirere diatria. Repressors ire! Cum planeta credere, omnes candidatuses demitto lotus, castus nixes. Galluss ridetis, tanquam teres fraticinida. Acipenser de teres hydra, reperire vox.</p>
                                    </div>
                                    <div className="quote-classic-meta">
                                        <cite className="quote-classic-cite">Scott Johnson</cite>
                                        <p className="quote-classic-position">Regular Customer</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Investors*/}
                <section className="section section-md bg-gray-100 text-center">
                    <div className="container"><span className="normal text-primry font-weight-bold text-uppercase wow fadeIn">companies that trust us</span>
                        <h3 className="offset-top-7 wow fadeIn" data-wow-delay=".1s">Our Clients</h3>
                        {/* Owl Carousel*/}
                        <div className="owl-carousel owl-carousel-centered owl-carousel-main" data-items={2} data-sm-items={3} data-md-items={4} data-lg-items={5} data-dots="true" data-nav="false" data-stage-padding={0} data-loop="true" data-margin={30} data-mouse-drag="false">
                            <div className="wow clipInLeft"><a className="link-image-1" href="#"><img src="images/investor-1-88x77.png" alt="" width={88} height={77} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".1s"><a className="link-image-1" href="#"><img src="images/investor-2-73x78.png" alt="" width={73} height={78} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".2s"><a className="link-image-1" href="#"><img src="images/investor-3-96x62.png" alt="" width={96} height={62} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".3s"><a className="link-image-1" href="#"><img src="images/investor-4-78x80.png" alt="" width={78} height={80} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".4s"><a className="link-image-1" href="#"><img src="images/investor-5-87x76.png" alt="" width={87} height={76} /></a></div>
                            <div className="wow clipInLeft"><a className="link-image-1" href="#"><img src="images/investor-1-88x77.png" alt="" width={88} height={77} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".1s"><a className="link-image-1" href="#"><img src="images/investor-2-73x78.png" alt="" width={73} height={78} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".2s"><a className="link-image-1" href="#"><img src="images/investor-3-96x62.png" alt="" width={96} height={62} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".3s"><a className="link-image-1" href="#"><img src="images/investor-4-78x80.png" alt="" width={78} height={80} /></a></div>
                            <div className="wow clipInLeft" data-wow-delay=".4s"><a className="link-image-1" href="#"><img src="images/investor-5-87x76.png" alt="" width={87} height={76} /></a></div>
                        </div>
                    </div>
                </section>
                <section className="section section-md-last block-footer-classic">
                        <div className="block-footer-classic-wrap">
                            <div className="container">
                                <div className="row row-50 justify-content-lg-between">
                                    <div className="col-md-6 col-lg-6 wow clipInLeft" style={{ animationName: 'none' }}>
                                        <p className="heading heading-alternate-1 text-white">Subscribe to Get Notified!</p>
                                        <p className="big text-white-50">Sign up to receive updates and fresh news from us.</p>
                                        <form className="rd-form rd-mailform form-inline form-shadow block-11 ot30" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="https://mibaio.in/bat/rd-mailform.php" noValidate="novalidate">
                                            <div className="form-wrap">
                                                <input className="form-input form-control-has-validation" id="subscribe-form-email-11" type="email" name="email" placeholder="Enter Your
                                                    E-mail" data-constraints="@Email @Required" /><span className="form-validation" />
                                            </div>
                                            <div className="form-button">
                                                <button className="button button-secondary button-winona" type="submit">
                                                    <div className="content-original">Subscribe</div>
                                                    <div className="content-dubbed">Subscribe</div>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6 col-xl-5 wow clipInLeft" style={{ animationName: 'none' }}>
                                        <p className="heading heading-alternate-1 text-white">Time to Get Started</p>
                                        <p className="big text-white-50">Upgrade your home to a smart home with MIBAiO!</p>
                                        <div className="group ot30"><a className="button button-secondary button-winona" href="https://mibaio.in/#">
                                            <div className="content-original">Get a
                                                Quote</div>
                                            <div className="content-dubbed">Get a
                                                Quote</div>
                                        </a><Link className="button button-default-outline button-winona text-white" to="/about_us">
                                                <div className="content-original">More About
                                                    MIBAiO</div>
                                                <div className="content-dubbed">More About
                                                    MIBAiO</div>
                                            </Link></div>
                                    </div>
                                </div>
                            </div>
                            {/* Page Footer*/}
                            <footer className="section footer-classic footer-classic_boxed text-white-50 text">
                                <div className="hr container">
                                    <hr />
                                </div>
                                <div className="footer-classic-main">
                                    <div className="container">
                                        <div className="row row-50 justify-content-lg-between">
                                            <div className="col-sm-7 col-lg-3 col-xl-2"><a className="brand" href="https://mibaio.in/index.html"><img src="images/logo-default-96x32.png" alt="" width={96} height={32} srcSet="images/logo-default-96x32.png 2x" /></a>
                                                <p><span className="text" style={{ maxWidth: '250px' }}>MIBAiO is the leading provider of
                                                the best automation
                                                    system for your smarthome.</span></p><Link to="/login" className="button button-color-8 button-winona text-black wow fadeIn" style={{ animationName: 'none' }}>
                                                    <div className="content-original">Sign In</div>
                                                    <div className="content-dubbed">Sign In</div>
                                                </Link>
                                            </div>
                                            <div className="col-sm-5 col-lg-3 col-xl-2">
                                                <h4 className="footer-classic-title text-white">About</h4>
                                                <ul className="list footer-classic-list text-white">
                                                    <li><Link to="/about_us">About Us</Link></li>
                                                    <li><Link to="/our_team">Our Team</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-7 col-lg-5 col-xl-3">
                                                <h4 className="footer-classic-title text-white">Useful Links</h4>
                                                <ul className="list footer-classic-list footer-classic-list_2-cols text-white">
                                                    <li><Link to="/register">Sign Up</Link></li>
                                                    <li><Link to="/careers">Careers</Link></li>
                                                    <li><Link to="/login">Log In</Link></li>
                                                    <li><a href="https://mibaio.in/#FAQ">FAQ</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-5 col-lg-9 col-xl-2">
                                                <h4 className="footer-classic-title text-white">Contact info</h4>
                                                <div className="row row-20 row-sm-35">
                                                    <div className="col-6 col-sm-12 col-lg-8 col-xl-12">
                                                        <div className="row row-10 text-white-50">
                                                            <div className="col-lg-6 col-xl-12"><a href="mailto:info@mibaio.xyz">info@mibaio.xyz</a></div>
                                                            <div className="col-lg-6 col-xl-12"><a className="big" href="tel:+91-9673660515">+91-9673660515</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-12 col-lg-4 col-xl-12 text-right text-sm-left">
                                                        <div className="group group-xs"><a className="link link-social-1 mdi mdi-twitter" href="https://mibaio.in/#" /><a className="link link-social-1 mdi mdi-facebook" href="https://mibaio.in/#" /><a className="link link-social-1 mdi mdi-instagram" href="https://mibaio.in/#" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hr container">
                                    <hr />
                                </div>
                                <div className="footer-classic-aside">
                                    <div className="container">
                                        <p className="text-white-50 rights"><span>©&nbsp;</span><span className="copyright-year">2022</span><span>&nbsp;</span><span>MIBAiO</span><span>.&nbsp;</span><a href="https://mibaio.in/privacy-policy.html"> Privacy Policy</a></p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </section>
                </div>
            <div className="snackbars" id="form-output-global" />
        </div>

    );
}

export default AboutUs;


