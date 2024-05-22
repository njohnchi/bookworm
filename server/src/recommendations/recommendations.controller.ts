import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(
    private readonly recommendationsService: RecommendationsService,
  ) {}

  @Get()
  async getRecommendations(@Query('userPreferences') userPreferences: string) {
    const recommendations =
      await this.recommendationsService.getRecommendedBooks(userPreferences);
    return { recommendations };
  }
}
