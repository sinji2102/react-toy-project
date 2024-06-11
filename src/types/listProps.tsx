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
