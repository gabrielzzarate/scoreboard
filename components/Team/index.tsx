import React from 'react';
import styled, { css } from 'styled-components';

const TEAM_THEME_MAP = {
  'oklahoma-city-thunder': '#0d3cbf',
  'miami-heat': '#92002d',
  'seattle-mariners': '#118c90',
  'los-angeles-angels': '#ae0f24',
}

export interface Props {
  full_name: string;
  team_id: string;
  scores: any[];
  league: string;
  home?: boolean;
  winner?: boolean;
}

const StyledTeam = styled.div`
  grid-column: 1 / span  2;
  display: flex; 
  padding: .5rem 0 1rem;

  @media screen and (min-width: 500px) {
    grid-column: 1 / span 11;
  }

  ${(props: Props) => props && props.league === 'MLB' && css`
    grid-column: 1 / span 11;
  `}

  .team {

    &__details {
      padding: 0 .5rem;
			padding-right: 2rem;
			display: grid;
			grid-template-rows: auto 1fr;
			grid-template-columns: 4rem 1fr;
			
			@media only screen and (min-width: 500px) {
				padding-right: 4rem;
			}

      &--name {
        grid-column: 2 / span 1;
				grid-row: 1 / span 1;
				padding: .5rem 0;
				padding-left: 1rem;
				font-weight: 700;
        max-width: 100px;
        font-size: 1rem;
        overflow: ellipsis;
      }

      &--logo {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        background-color: ${(props: Props) => props.team_id && TEAM_THEME_MAP[props.team_id] ? TEAM_THEME_MAP[props.team_id] : '#ae0f24'};
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }

    &__score {
      display: none;
			
			@media only screen and (min-width: 630px) {
				display: flex;
        grid-column: 2 / span 9;
        grid-row: 1 / span 1;
				width: 2rem;
        justify-content: center;
        align-items: center;
				font-size: .8rem;
			}
    }

    &__total {
      position: relative;
			width: 6rem;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 0 1rem;
			font-size: 2rem;
			font-weight: 900;
      color: var(--grey);
    }
  }

  ${(props: Props) => props && props.winner && css`

    .team__total, .team__score {
      color: var(--dk-grey);
    }
    .team__total {
      &:after {
        content: '';
        position: absolute;
        margin: auto;
        right: 0;
        top: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--dk-grey) transparent transparent;
      }
    }
  `}
`;

export default function Team({ full_name, team_id, league, scores, ...props }: Props): JSX.Element {
  const total = scores && scores.length > 0 && scores.reduce((item, acc) => item + acc, 0);
  return (
    <StyledTeam team_id={team_id} winner={props.winner} league={league}>
      <div className="team__details">
        <div className="team__details--name">
          {full_name}
        </div>
        <div className="team__details--logo" />
      </div>
      {scores && scores.length > 0 && scores.map((item) => (
        <div className="team__score">{item}</div>
      ))}
      {total && <div className="team__total">{total}</div>}
    </StyledTeam>
  )
}