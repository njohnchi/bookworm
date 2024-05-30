import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenAIRecommendationService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getRecommendations(userPreferences: string): Promise<any> {
    const apiUrl = this.configService.get('OPENAI_API_URL');
    const apiKey = this.configService.get('OPENAI_API_KEY');

    const response = await this.httpService
      .post(
        apiUrl,
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
          max_tokens: 2048,
          stream: false,
          temperature: 0.7,
          top_p: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      )
      .toPromise();

    return response.data.choices[0].message.content.split('\n');
  }
}
