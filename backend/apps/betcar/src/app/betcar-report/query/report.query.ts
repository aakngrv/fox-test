import { IsArray, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_REPORT_COUNT_LIMIT, DEFAULT_SORT_DIRECTION } from '../betcar-report.constants';

export class ReportQuery {
  @Transform(({ value } ) => +value || DEFAULT_REPORT_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_REPORT_COUNT_LIMIT;

  @Transform(({ value }) => value.split(',').map((categoryId) => +categoryId))
  @IsArray({})
  @IsOptional()
  public categories?: number[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number;
}