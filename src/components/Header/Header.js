import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { FAMILIES, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>

        <Logo />

        <VerticalActionGroup>
          <SubscribeButtonWrapper>
            <SubscribeButton>SUBSCRIBE</SubscribeButton>
          </SubscribeButtonWrapper>
          <SubscriberLink>Already a subscriber?</SubscriberLink>
        </VerticalActionGroup>
      </DesktopHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

/* Desktop layout */

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    color: var(--color-gray-900);
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const VerticalActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  justify-self: end;
`;

const SubscribeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${11 / 16}rem ${24 / 16}rem;
  background-color: var(--color-primary);
  color: hsla(0, 0%, 100%, 1);
  border-radius: 4px;
`;

const SubscribeButton = styled.button`
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);
  font-size: 1rem;
`;

const SubscriberLink = styled.a`
  font-style: italic;
  font-weight: var(--font-weight-normal);
  font-size: ${14 / 16}rem;
  text-decoration: underline;
`;

export default Header;
