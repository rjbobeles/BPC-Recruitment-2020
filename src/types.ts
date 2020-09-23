export interface ApiResponse {
  status?: number
  message?: string
  debug?: boolean
  courses?: Array<Course>
  positions?: Array<Position>
}

export interface Course {
  id: number
  school: string
  code: string
  course: string
}

export interface Position {
  id: number
  section: string
  position: string
  hiring: boolean
}
