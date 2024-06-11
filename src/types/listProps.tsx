export interface ListItemProps {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  idx?: number;
  onEdit?: void;
  onDelete?: void;
}

export interface EditInputProps extends ListItemProps {
  onEdit: (idx: number, title: string, body: string) => void;
  onDelete: (idx: number) => void;
}
