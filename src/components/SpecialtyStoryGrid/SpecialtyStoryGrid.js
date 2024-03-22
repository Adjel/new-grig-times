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
            <MiniSportStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </MiniSportStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: 100%;
    gap: 64px;
  }
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

const MarketsSection = styled.section`
  @media (${QUERIES.laptopAndUp}) {
    grid-area: "market";
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  }
`;

const SportsSection = styled.section`
  @media (${QUERIES.tabletAndUp}) {
    overflow: auto;
  }
`;

const MiniSportStoryWrapper = styled.div`
  @media (${QUERIES.tabletAndUp}) {
    min-width: 220px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));

  @media (${QUERIES.tabletAndUp}) {
    display: flex;
    overflow: auto;
    grid-template-columns: revert;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-area: "sport";
  }
`;

export default SpecialtyStoryGrid;
