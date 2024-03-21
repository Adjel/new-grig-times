import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <Divider />

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <Divider2 />

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <Divider3 />

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    grid-template-columns: 2fr 1px 1fr;
    grid-template-areas:
      "main-story divider secondary-stories"
      "advertisement advertisement advertisement"
      "opinion-stories opinion-stories opinion-stories";

    gap: 16px;
  }

  @media (${QUERIES.laptopAndUp}) {
    grid-template-columns: 5.5fr 1px 4fr 1px 3fr;
    grid-template-areas:
      "main-story divider secondary-stories divider2 opinion-stories"
      "main-story divider divider3 divider3 divider3"
      "main-story divider advertisement advertisement advertisement";

    gap: 16px;
  }
`;

const Divider = styled.div`
  display: none;
  border-right: 1px solid var(--color-gray-300);
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    grid-area: divider;
  }
  @media (${QUERIES.tabletOnly}) {
    display: revert;
    grid-area: divider;
  }
`;

const Divider2 = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    grid-area: divider2;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const Divider3 = styled.div`
  display: none;
  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    grid-area: divider3;
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionList = styled.div`
  display: flex;
  flex-direction: column;

  @media (${QUERIES.tabletOnly}) {
    flex-direction: revert;
    gap: 32px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  margin-top: -8px;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

const StoryWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

const OpinionWrapper = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  @media (${QUERIES.tabletOnly}) {
    &:not(:last-of-type) {
      border-bottom: none;
    }
    flex: 1;
  }
`;

export default MainStoryGrid;
