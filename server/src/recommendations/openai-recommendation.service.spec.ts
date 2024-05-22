import { Test, TestingModule } from '@nestjs/testing';
import { OpenAIRecommendationService } from './openai-recommendation.service';

describe('OpenaiRecommendationService', () => {
  let service: OpenAIRecommendationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenAIRecommendationService],
    }).compile();

    service = module.get<OpenAIRecommendationService>(
      OpenAIRecommendationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
