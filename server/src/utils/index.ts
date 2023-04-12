import * as dotenv from 'dotenv'
import path from 'path'

export const dotenvConfig = (__filename: string, envPath: string) => {
  const __dirname = path.dirname(__filename)
  dotenv.config({ path: __dirname + envPath })
}