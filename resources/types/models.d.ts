export {}
declare global {
  export namespace models {

    export interface User {
      // columns
      id: number
      name: string
      email: string
      email_verified_at?: string|null
      created_at?: string|null
      updated_at?: string|null
    }

  }
}

