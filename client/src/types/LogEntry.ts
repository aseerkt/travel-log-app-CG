export type LogEntry = {
  title: string;
  description?: string;
  comments: string;
  rating: number;
  latitude: number;
  longitude: number;
  visitDate: string;
};

export type LogEntryDoc = LogEntry & { _id: string };
