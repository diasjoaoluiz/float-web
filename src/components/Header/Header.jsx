"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/app/GlobalStyles';
import MobileMenu from '../MobileMenu/MobileMenu';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Content, Left, Logo, NavItem, Right, MobileMenuIcon, HeaderContainer } from './Styled.Header';

export default function Header () {
    const [sidebar, setSidebar] = useState(false);
    const toggleHamburgerMenu = () => {
    setSidebar(!sidebar);
    };

    const closeSidebar = () => {
        setSidebar(false);
    };

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        };

        if (sidebar) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebar]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebar(false);
            }
        };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);
    return(
        <HeaderContainer>
            <Container>
                <Content>
                    <Left ref={sidebarRef}>
                        <div>
                            <Logo src="/images/logo.png"></Logo>
                        </div>
                        <NavItem>
                            <Text size="medium">Home</Text>
                        </NavItem>
                        <NavItem>
                        <Text size="medium">Fones de Ouvido</Text>
                        </NavItem>
                        <NavItem>
                        <Text size="medium">Relogios Inteligentes</Text>
                        </NavItem>
                        <NavItem>
                        <Text size="medium">Acessorios</Text>
                        </NavItem>
                    </Left>
                    <Right>
                        <NavItem>
                            <img src="/images/search.png" alt="" />
                        </NavItem>
                        <NavItem>
                            <img src="/images/user.png" alt="" />
                        </NavItem>
                        <NavItem>
                            <img src="/images/shopping-cart.png" alt="" />
                        </NavItem>
                        <MobileMenuIcon onClick={toggleHamburgerMenu} src="/images/menu-burger.png" alt=""></MobileMenuIcon>
                        {sidebar && <MobileMenu active={closeSidebar} />}
                    </Right>
                </Content>
            </Container>
        </HeaderContainer>
        
    );
};