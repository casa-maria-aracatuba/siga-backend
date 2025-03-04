import {
  Controller,
  Post,
  Body,
  Get,
  ParseIntPipe,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AssistedPersonDto } from '../../../application/dtos/assisted-person-dto';
import { AssistedPersonService } from '../../../domain/service/assisted-person-service';
import { AuthGuard } from '@nestjs/passport';

@Controller('assisted-people')
export class AssistedPersonController {
  constructor(private assistedPeopleService: AssistedPersonService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createAssistedPersonDto: AssistedPersonDto) {
    return this.assistedPeopleService.create(createAssistedPersonDto);
  }

  @Get()
  async findAll() {
    return this.assistedPeopleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.assistedPeopleService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() assistedPersonDto: AssistedPersonDto,
  ) {
    return this.assistedPeopleService.update(id, assistedPersonDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.assistedPeopleService.delete(id);
  }
}
