import React, { useState } from 'react';
import { AlignLeft, Bell, Inbox, Search } from 'react-feather';
import { Button, Container, Dropdown, Form, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { toggleCollapsedNav } from '../../redux/action/Theme';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import CustomInput from './CustomInput';
import HkBadge from '../../components/@hk-badge/@hk-badge';

import './TopNav.css'


const TopNav = ({ navCollapsed, toggleCollapsedNav }) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState("")

    const CloseSearchInput = () => {
        setSearchValue("");
        setShowDropdown(false);
    }

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 10
        },
        open: {
            opacity: 1,
            y: 0
        },
        close: {
            opacity: 0,
            y: 10
        }
    };



    return (
        <Navbar expand="xl" className="hk-navbar navbar-light fixed-top" >
            <Container fluid>
                {/* Start Nav */}
                <div className="nav-start-wrap">
                    <Button variant="flush-dark" onClick={() => toggleCollapsedNav(!navCollapsed)} className="btn-icon btn-rounded flush-soft-hover navbar-toggle d-xl-none">
                        <span className="icon">
                            <span className="feather-icon"><AlignLeft /></span>
                        </span>
                    </Button>
                    {/* Search */}
                    <div className="no-caret position-relative border search-box">
                        <Search className='position-absolute top-50 start-0 translate-middle-y ms-2' />
                        <InputGroup className="ms-5 border border-0 d-xl-flex d-none">
                            <span className="input-affix-wrapper input-search affix-border">
                                <Form.Control type="text" className=" search-inp" data-navbar-search-close="false" placeholder="Search" aria-label="Search" onFocus={() => setShowDropdown(true)} onBlur={() => setShowDropdown(false)} value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                            </span>
                        </InputGroup>
                    </div>
                </div>
                {/* /Start Nav */}
                {/* End Nav */}
                <div className="nav-end-wrap">
                    <Nav className="navbar-nav flex-row">
                        <Nav.Item>
                            <Button variant="flush-dark" as={Link} to="/apps/email" className="btn-icon btn-rounded flush-soft-hover">
                                <span className="icon">
                                    <span className=" position-relative">
                                        <span className="feather-icon "><Inbox /></span>
                                        <HkBadge bg="" soft pill size="sm" className="position-top-end-overflow-1 icon-top" >1</HkBadge>
                                    </span>
                                </span>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown className="dropdown-notifications me-5">
                                <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret">
                                    <span className="icon">
                                        <span className="position-relative">
                                            <span className="feather-icon"><Bell /></span>
                                            <HkBadge bg="success" indicator className="position-top-end-overflow-1" />
                                        </span>
                                    </span>
                                </Dropdown.Toggle>
                                    
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </div>
                {/* /End Nav */}
            </Container>
        </Navbar>
    )
}

const mapStateToProps = ({ theme }) => {
    const { navCollapsed } = theme;
    return { navCollapsed }
};

export default connect(mapStateToProps, { toggleCollapsedNav })(TopNav);