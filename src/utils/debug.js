import eruda from 'eruda'
import { DEBUG_WHITE_LIST } from '../constant/enums'

export function initDebugTool () {
  const currentEnv = process.env.NODE_ENV
  if (DEBUG_WHITE_LIST.includes(currentEnv)) {
    eruda.init()
  }
}
