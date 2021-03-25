
export interface TeamType {
  team_id: string;
  abbreviation: string;
  active: boolean;
  first_name: string;
  last_name: string;
  conference: string;
  division: string;
  site_name: string;
  full_name: string;
}

export interface EventType {
  temperature: number;
  status: string;
  season_type: string;
}

export interface GameType {
  league: string;
  away_team: TeamType;
  home_team: TeamType;
  away_period_scores: Array<number>;
  home_period_scores: Array<number>; 
  event_information: EventType;
}