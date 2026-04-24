import { pipe } from "effect/Function"

type IO<A> = () => A
const toConsole = (message: string): IO<string> =>
  () => {
    console.log(message + `\n`)
    return message
  }

const sayHello = pipe('Hello, Functional Programming', toConsole)

sayHello()