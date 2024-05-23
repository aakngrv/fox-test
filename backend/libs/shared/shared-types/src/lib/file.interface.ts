export interface File {
  fileId?: number;
  originalFilename: string;
  size: number;
  mimetype: string;
  hashName: string;
  path: string;
}