import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { UserBidService } from './bids.service';
import { fillObject } from '@backend/util/util-core';
import { UserBidRdo } from './rdo/bid.rdo';
import { CreateUserBidDto } from './dto/create-bid.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BidEmailDto } from './dto/bid-email.dto';



@ApiTags('Заявки пользователей')
@Controller('bids')
export class UserBidsController {
  constructor(
    private readonly userBidService: UserBidService
  ) {}
  
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Заявка успешно создана.'
  })
  @Post('/')
  async create(@Body() dto: CreateUserBidDto) {
    const newBid = await this.userBidService.createBid(dto);
    return fillObject(UserBidRdo, newBid);
  }
  
  @ApiResponse({
    type: UserBidRdo,
    status: HttpStatus.OK,
    description: 'Заявка найдена'
  })
  @Get('/:id')
  async show(@Param('id') id: string) {
    const bidId = parseInt(id, 10);
    const existBid = await this.userBidService.getBid(bidId);
    return fillObject(UserBidRdo, existBid);
  }

  @ApiResponse({
    type: UserBidRdo,
    status: HttpStatus.OK,
    description: 'Заявка найдена'
  })
  @Post('/email')
  async showEmail(@Body() email: BidEmailDto) {
    const existBidEmail = await this.userBidService.getBidByEmail(email);
    return fillObject(UserBidRdo, existBidEmail);
  }
  
  @ApiResponse({
    type: UserBidRdo,
    status: HttpStatus.OK,
    description: 'Заявки найдены'
  })
  @Get('/')
  async index() {
    const bids = await this.userBidService.getBids();
    return fillObject(UserBidRdo, bids);
  }
  
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Заявка удалена.'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id') id: string) {
    const bidId = parseInt(id, 10);
    await this.userBidService.deleteBid(bidId);
  }
  
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Заявка обновлена.'
  })
  @HttpCode(HttpStatus.OK)
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() dto: CreateUserBidDto) {
    const bidId = parseInt(id, 10);
    const updatedBid = await this.userBidService.updateBid(bidId, dto)
    return fillObject(UserBidRdo, updatedBid)
  }
}
