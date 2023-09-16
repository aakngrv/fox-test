import { Expose } from 'class-transformer';

export class ReportRdo {
  
  @Expose()
  public id: string
  
  @Expose()
  public  executorId: String;

  @Expose()
  public  createdAt: string;

  @Expose()
  public publishAt: string;
}