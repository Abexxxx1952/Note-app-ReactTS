import editIcon from "../icons/edit.png";
import archiveIcon from "../icons/archive.png";
import trashIcon from "../icons/trash.png";
import unzipIcon from "../icons/unzip.png";

export const activeTableHeaders = [
  "Name",
  "Created",
  "Category",
  "Content",
  "Dates",
  "Icons",
];
export const activeTableIcons = [
  { src: editIcon, alt: "edit_icon" },
  { src: archiveIcon, alt: "archive_icon" },
  { src: trashIcon, alt: "trash_icon" },
];

export const archivedTableHeaders = [
  "Name",
  "Created",
  "Category",
  "Content",
  "Dates",
  "Icons",
];

export const archiveTableIcons = [
  { src: unzipIcon, alt: "unzip_icon" },
  { src: trashIcon, alt: "trash_icon" },
];

export const pivotTableHeaders = ["Notes by categories", "Active", "Archived"];
export const regexp = /\d{1,2}\/\d{1,2}\/\d{2,4}/g;
