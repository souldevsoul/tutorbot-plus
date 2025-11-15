'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

type Subject = 'math' | 'science' | 'language' | 'programming' | 'test-prep';
type Level = 'beginner' | 'intermediate' | 'advanced';

interface CourseCreatorProps {
  userCredits?: number;
  onSuccess?: (courseId: string) => void;
}

export function CourseCreator({ userCredits = 0, onSuccess }: CourseCreatorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    subject: '' as Subject,
    level: '' as Level,
    description: '',
  });

  const subjects: { value: Subject; label: string; icon: string }[] = [
    { value: 'math', label: 'Mathematics', icon: '🔢' },
    { value: 'science', label: 'Science', icon: '🔬' },
    { value: 'language', label: 'Language', icon: '🗣️' },
    { value: 'programming', label: 'Programming', icon: '💻' },
    { value: 'test-prep', label: 'Test Prep', icon: '📝' },
  ];

  const levels: { value: Level; label: string; description: string }[] = [
    { value: 'beginner', label: 'Beginner', description: 'Just starting out' },
    { value: 'intermediate', label: 'Intermediate', description: 'Some experience' },
    { value: 'advanced', label: 'Advanced', description: 'Expert level' },
  ];

  const COURSE_COST = 50;
  const canAfford = userCredits >= COURSE_COST;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.title || !formData.subject || !formData.level) {
      setError('Please fill in all required fields');
      return;
    }

    if (!canAfford) {
      setError(`Insufficient credits. You need ${COURSE_COST} credits to create a course.`);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/courses/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create course');
      }

      // Success!
      if (onSuccess) {
        onSuccess(data.course.id);
      } else {
        router.push(`/dashboard/courses/${data.course.id}`);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gradient-hero">Create Your Course</h2>
          <p className="text-gray-600">
            AI will generate personalized lessons tailored to your learning goals
          </p>
        </div>

        {/* Credits Info */}
        <div className={`p-4 rounded-lg ${canAfford ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Cost: {COURSE_COST} credits
            </span>
            <span className={`text-sm font-bold ${canAfford ? 'text-green-700' : 'text-amber-700'}`}>
              Your balance: {userCredits} credits
            </span>
          </div>
        </div>

        {/* Course Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Course Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Introduction to Algebra"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>

        {/* Subject Selection */}
        <div className="space-y-2">
          <Label>Subject *</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {subjects.map((subject) => (
              <button
                key={subject.value}
                type="button"
                onClick={() => setFormData({ ...formData, subject: subject.value })}
                className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  formData.subject === subject.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">{subject.icon}</div>
                <div className="text-sm font-medium">{subject.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Level Selection */}
        <div className="space-y-2">
          <Label>Difficulty Level *</Label>
          <div className="grid grid-cols-3 gap-3">
            {levels.map((level) => (
              <button
                key={level.value}
                type="button"
                onClick={() => setFormData({ ...formData, level: level.value })}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  formData.level === level.value
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-sm mb-1">{level.label}</div>
                <div className="text-xs text-gray-600">{level.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <textarea
            id="description"
            placeholder="What do you want to learn? Any specific topics or goals?"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading || !canAfford}
          className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Course...
            </span>
          ) : (
            `Create Course (${COURSE_COST} credits)`
          )}
        </Button>
      </form>
    </Card>
  );
}
