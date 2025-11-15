'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
}

interface QuizInterfaceProps {
  quiz: Quiz;
  lessonTitle: string;
  onComplete?: (score: number, passed: boolean) => void;
}

export function QuizInterface({ quiz, lessonTitle, onComplete }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = quiz.questions;
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  const hasAnswered = selectedAnswers[currentQuestion] !== undefined;

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    // Calculate score
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / totalQuestions) * 100);
    const passed = finalScore >= quiz.passingScore;

    setScore(finalScore);
    setShowResults(true);

    // TODO: Save quiz attempt to database
    // await fetch(`/api/quizzes/${quiz.id}/attempt`, {
    //   method: 'POST',
    //   body: JSON.stringify({ answers: selectedAnswers, score: finalScore, passed }),
    // });

    if (onComplete) {
      onComplete(finalScore, passed);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  // Results View
  if (showResults) {
    const passed = score >= quiz.passingScore;
    const correctCount = questions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length;

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Results Header */}
        <Card className="p-8 text-center">
          <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl ${
            passed ? 'bg-green-100' : 'bg-amber-100'
          }`}>
            {passed ? '🎉' : '📚'}
          </div>
          <h2 className="text-3xl font-bold mb-2">
            {passed ? 'Congratulations!' : 'Keep Learning!'}
          </h2>
          <p className="text-gray-600 mb-6">
            {passed
              ? 'You passed the quiz!'
              : 'You need more practice. Review the lesson and try again.'}
          </p>

          <div className="flex justify-center gap-8 mb-6">
            <div>
              <div className="text-4xl font-bold text-blue-600">{score}%</div>
              <div className="text-sm text-gray-600">Your Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-600">{quiz.passingScore}%</div>
              <div className="text-sm text-gray-600">Passing Score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">{correctCount}/{totalQuestions}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={handleRetake} variant="outline">
              Retake Quiz
            </Button>
            {passed && onComplete && (
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Continue to Next Lesson
              </Button>
            )}
          </div>
        </Card>

        {/* Answer Review */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Review Your Answers</h3>
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className={isCorrect ? 'bg-green-500' : 'bg-red-500'}>
                      {isCorrect ? '✓' : '✗'}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer = question.correctAnswer === optIndex;

                          return (
                            <div
                              key={optIndex}
                              className={`p-3 rounded-lg ${
                                isCorrectAnswer
                                  ? 'bg-green-50 border-2 border-green-500'
                                  : isUserAnswer
                                  ? 'bg-red-50 border-2 border-red-500'
                                  : 'bg-gray-50'
                              }`}
                            >
                              {option}
                              {isCorrectAnswer && <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>}
                              {isUserAnswer && !isCorrectAnswer && <span className="ml-2 text-red-600 font-semibold">Your Answer</span>}
                            </div>
                          );
                        })}
                      </div>
                      <p className="mt-3 text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    );
  }

  // Quiz Taking View
  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Quiz Header */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gradient-hero">{lessonTitle}</h2>
            <p className="text-gray-600">Quiz - {totalQuestions} Questions</p>
          </div>
          <Badge className="bg-blue-500 text-lg px-4 py-2">
            {currentQuestion + 1}/{totalQuestions}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </Card>

      {/* Question Card */}
      <Card className="p-8">
        <h3 className="text-xl font-semibold mb-6">
          {currentQuestion + 1}. {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-3 h-3 rounded-full bg-white" />
                  )}
                </div>
                <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* Navigation */}
      <Card className="p-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
          >
            ← Previous
          </Button>

          <div className="text-sm text-gray-600">
            {selectedAnswers.filter(a => a !== undefined).length} of {totalQuestions} answered
          </div>

          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswers.filter(a => a !== undefined).length !== totalQuestions}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!hasAnswered}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Next →
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
