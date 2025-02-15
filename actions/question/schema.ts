import { z } from 'zod';

export const QuestionInsertSchema = z.object({
  title: z.string().min(5, 'Question title too short'),
  content: z.string().min(20, 'Question content too short'),
  tags: z.array(z.string()).optional(),
});

export const QuestionUpdateSchema = z.object({
  title: z.string().min(5, 'Question title too short'),
  content: z.string().min(20, 'Question content too short'),
  tags: z.array(z.string()).optional(),
});
