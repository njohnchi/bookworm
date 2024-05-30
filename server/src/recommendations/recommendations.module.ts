import { Module } from '@nestjs/common';
import { RecommendationsController } from './recommendations.controller';
import { RecommendationsService } from './recommendations.service';
import { OpenAIRecommendationService } from './openai-recommendation.service';
import { BooksService } from '../books/books.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [RecommendationsController],
  providers: [
    RecommendationsService,
    OpenAIRecommendationService,
    BooksService,
  ],
})
export class RecommendationsModule {}
