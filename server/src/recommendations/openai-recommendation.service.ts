import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class OpenAIRecommendationService {
  private readonly apiUrl = 'https://gpt4.discord.rocks/ask';

  constructor(private readonly httpService: HttpService) {}

  async getRecommendations(userPreferences: string): Promise<any> {
    const response = await this.httpService
      .post(
        this.apiUrl,
        {
          messages: [
            {
              role: 'user',
              content: 'Only respond with the list of answers',
            },
            {
              role: 'user',
              content: `Based on the following preferences, recommend some books: ${userPreferences}`,
            },
          ],
          model: 'gpt-4o',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .toPromise();

    return response.data.response.split('\n');
  }
}
