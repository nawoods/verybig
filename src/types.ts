import { DateTime } from 'luxon';
type Role = "player" | "restreamer" | "admin";

type Participant = {
  name: string;
  twitch: string;
  twitchAlt: string[];
  discord: string;
  roles: Role[];
};

type AppData = {
  participantList: Participant[];
};

type UpcomingMatch = {
  id: number;
  player1: string;
  player2: string;
  restreamer?: string;
  time: DateTime;
};

export type { Role, Participant, AppData, UpcomingMatch };