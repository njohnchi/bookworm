import { Injectable } from '@nestjs/common';
import { BooksService } from '../books/books.service';
import { OpenAIRecommendationService } from './openai-recommendation.service';

@Injectable()
export class RecommendationsService {
  constructor(
    private readonly booksService: BooksService,
    private readonly openAIRecommendationService: OpenAIRecommendationService,
  ) {}

  async getRecommendedBooks(userPreferences: string): Promise<any[]> {
    const recommendedTitles =
      await this.openAIRecommendationService.getRecommendations(
        userPreferences,
      );
    const recommendedBooks = [];

    for (const title of recommendedTitles) {
      const booksResponse = await this.booksService.searchBooks(title);
      if (booksResponse.items && booksResponse.items.length > 0) {
        recommendedBooks.push(booksResponse.items[0]);
      }
    }

    return recommendedBooks;
  }
}
