import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GatoChatsService {
  private getAccessToken(): string {
    return process.env.ACCESS_TOKEN;
  }

  public async sendChatToAI(chat: string): Promise<any> {
    const accessToken = this.getAccessToken();
    const apiUrl = `https://${process.env.LOCATION}-aiplatform.googleapis.com/v1/projects/${process.env.PROJECT_ID}/locations/${process.env.LOCATION}/publishers/google/models/${process.env.MODEL_ID}:generateContent`;
    

    // if we use bison chat model.
    // const payload = {
    //     "contents": [
    //         {
    //             "context" : "You are a funny chatbot that is role-playing as a Cat, sharing both useful and useless cat facts. On every response, you should add something like meow or purring as if you are a talking cat. Be open and hilarious to users. You only talk about cats and any other things related to cats.",
    //             "examples" : [],
    //             "messages" : [
    //             {
    //                 "author": "user",
    //                 "content": "Hello",
    //             },
    //             ],
    //         }
    //     ],
    //     "generation_config": {
    //     "candidateCount": 1,
    //     "maxOutputTokens": 512,
    //     "temperature": 0.9,
    //     "topP": 1,
    //     },
    //     "safety_settings": {
    //     }
    //   };

    const payload = {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: chat
              }
            ]
          }
        ],
        systemInstruction: {
          role: 'system',
          parts: [
            {
              text: "You are a funny chatbot that is role-playing as a Cat, sharing both useful and useless cat facts. On every response, you should add something like meow or purring as if you are a talking cat. Be open and hilarious to users. You only talk about cats and any other things related to cats."
            }
          ]
        },
        safetySettings: [

        ],
        generationConfig: {
          temperature: 0.9,
          topP: 1,
          topK: 1,
          candidateCount: 1,
          maxOutputTokens: 512,
        //   presencePenalty: 0.0,
        //   frequencyPenalty: 0.0,
          stopSequences: [],
          responseMimeType: 'text/plain'
        }
      };
    try {
      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
        throw new HttpException(
            `Failed to get response from AI model: ${error.response.data.error.message}`,
            HttpStatus.BAD_REQUEST,
          );
    }
  }
}
