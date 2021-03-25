import React from 'react';
import styled, { css } from 'styled-components';
import Team from '../Team';
import { GameType } from '../../types';

const Container = styled.div`
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledScoreboard = styled.div`
  height: 225px;
  border: 1px solid var(--border-color);
  background: #fff;
  display: grid;
	grid-template-rows: 2rem minmax(3rem, 1fr) minmax(3rem, 1fr) 2rem;
  grid-template-columns: minmax(8rem, 1fr) repeat(4, 2rem) 6rem;
  overflow: hidden;

  @media only screen and (max-width: 630px) {
    grid-template-columns: 1fr 0rem;
  }

  .title {
    grid-column: 1 / span 1;
		grid-row: 1 / span 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid var(--border-color);
		padding: 0 1rem;
		text-transform: uppercase;
		font-size: .9rem;
		
		@media screen and (min-width: 630px) {
			grid-column: 1 / span 2;
		}
  }

  .periods {
    display: none;
		
		@media only screen and (min-width: 630px) {
			grid-column: 2 / span 4;
			grid-row: 1 / span 1;
			display: flex;
			flex-direction: row;
			border-bottom: 1px solid var(--border-color);

			span {
				flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
				font-size: .9rem;
			}
		}
  }
  
  .total {
		grid-column: 6 / span 1;
		grid-row: 1 / span 1;
		border-bottom: 1px solid var(--border-color);
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 1rem;
		font-size: .9rem;
		
		@media screen and (min-width: 500px) {
			grid-column: 6 / span 1;
		}
	}

  .note {
    grid-column: 1 / span 2;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 1rem;
		font-size: .75rem;
		border-top: 1px solid var(--border-color);
		white-space: nowrap;
    overflow: hidden;
		text-overflow: ellipsis;
		
		@media only screen and (min-width: 500px) {
			grid-column: 1 / span 6;
		}
  }

  ${(props) => props.league && props.league === 'MLB' && css`
    grid-template-columns: minmax(1rem, 14.5rem) repeat(9, 2rem) 6rem;

    .title {
      grid-column: 1 / span 1;
      
    }

    .periods {
      grid-column: 2 / span 9;
    }

    .total {
      grid-column: 11 / span 1;
    }

    .note {
      grid-column: 1 / span 11;
    }
  `}
 `;


export default function Scoreboard({ home_team, away_team, away_period_scores, home_period_scores, event_information, ...props }: GameType) {

  return (
    <Container>
      <StyledScoreboard league={props.league}>
        <div className="title">{event_information && event_information.status && event_information.status === 'completed' ? 'Final' : 'In Progress'}</div>
        <div className="periods">
          {home_period_scores && home_period_scores.length > 0 && Array.from({ length: home_period_scores.length }).map((item, i) => {
            return (
              <span key={`periods-${i}`}>{i + 1}</span>
            )
          })}
        </div>
        <div className="total">
          T
        </div>
        {away_team && <Team {...away_team} scores={away_period_scores} league={props.league} />}
        {home_team && <Team {...home_team} scores={home_period_scores} winner league={props.league} />}

        <div className="note">
          <span>
            {event_information && event_information.season_type && event_information.season_type === 'post' ? 'Post Season' : 'Regular Season'}
          </span>
        </div>
      </StyledScoreboard>
    </Container>
  )
}