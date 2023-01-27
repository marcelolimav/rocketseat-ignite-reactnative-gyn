export type HistoryDTO = {
  id: string;
  user_id: string;
  exercise_id: string;
  name: string;
  group: string;
  created_at: string;
  hour: string;
};

export type HistoryByDayDTO = {
  title: string;
  data: HistoryDTO[];
};
