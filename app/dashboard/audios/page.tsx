import { Suspense } from "react"
import { DataTable } from "@/components/ui/data-table"
import { columns, type Audio } from "./columns"
import { Text, Heading } from "@/components/ui/typography"

async function getLessons(): Promise<Audio[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/lessons`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      console.error('Failed to fetch lessons:', response.statusText)
      return []
    }

    const data = await response.json()

    if (!data.success || !data.lessons) {
      console.error('Invalid API response:', data)
      return []
    }

    // Map API response to Lesson type
    return data.lessons.map((audio: any) => ({
      id: audio.id,
      filename: audio.filename,
      audioUrl: audio.audioUrl,
      duration: audio.duration,
      fileSize: audio.fileSize,
      format: audio.format,
      voiceName: audio.voice?.name || null,
      text: audio.text,
      status: audio.status,
      createdAt: new Date(audio.createdAt).toISOString(),
    }))
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return []
  }
}

export default async function LessonsPage() {
  const lessons = await getLessons()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <Heading as="h1" className="text-2xl font-bold uppercase tracking-tight">
            Lesson Library
          </Heading>
          <Text variant="body" className="text-slate-600">
            Manage your generated and uploaded audio files
          </Text>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <DataTable
          columns={columns}
          data={lessons}
          searchKey="filename"
          searchPlaceholder="Search lessons..."
        />
      </Suspense>
    </div>
  )
}
