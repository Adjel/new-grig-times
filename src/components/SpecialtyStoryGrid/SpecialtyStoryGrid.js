import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>

      <Divider />

      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 1fr 1px 1fr;
    grid-template-areas: "market divider sport";
    gap: 16px;
  }
`;

const Divider = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    grid-area: "divider";
    border-right: 0.5px solid var(--color-gray-300);
    border-left: 0.5px solid var(--color-gray-300);
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-area: "market";
  }
`;

const SportsSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    max-width: 100%;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-area: "sport";
  }
`;

export default SpecialtyStoryGrid;
