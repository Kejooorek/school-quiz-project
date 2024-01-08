export interface Question {
  question_id: number;
  question_text: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  correct_answer: string;
}

export interface AddQuestion {
  question_text: string;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  correct_answer: string;
}

export interface UpdateQuestion {
  question_text?: string;
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  correct_answer?: string;
}
