import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { OrgBidService } from './org-bids.service';
import { fillObject } from '@backend/util/util-core';
import { OrgBidRdo } from './rdo/org-bid.rdo';
import { CreateOrgBidDto } from './dto/create-org-bids.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrgBidEmailDto } from './dto/org-bid-email.dto';



@ApiTags('Заявки организаций')
@Controller('org-bids')
export class OrgBidsController {
  constructor(
    private readonly orgBidService: OrgBidService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Заявка успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateOrgBidDto) {
    const newBid = await this.orgBidService.createBid(dto);
    return fillObject(OrgBidRdo, newBid);
  }
  
  @ApiResponse({
    type: OrgBidRdo,
    status: HttpStatus.OK,
    description: 'Заявка найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const bidId = parseInt(id, 10);
    const existBid = await this.orgBidService.getBid(bidId);
    return fillObject(OrgBidRdo, existBid);
  }

  @ApiResponse({
    type: OrgBidRdo,
    status: HttpStatus.OK,
    description: 'Заявка найдена'
  })
  @Post('/email')
  async showEmail(@Body() email: OrgBidEmailDto) {
    const existBidEmail = await this.orgBidService.getBidByEmail(email);
    return fillObject(OrgBidRdo, existBidEmail);
  }
  
  @ApiResponse({
    type: OrgBidRdo,
    status: HttpStatus.OK,
    description: 'Заявки найдены'
  })
  @Get('/')
  async index() {
    const bids = await this.orgBidService.getBids();
    return fillObject(OrgBidRdo, bids);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Заявка удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const bidId = parseInt(id, 10);
    await this.orgBidService.deleteBid(bidId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Заявка обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateOrgBidDto) {
    const bidId = parseInt(id, 10);
    const updatedBid = await this.orgBidService.updateBid(bidId, dto)
    return fillObject(OrgBidRdo, updatedBid)
  }
}