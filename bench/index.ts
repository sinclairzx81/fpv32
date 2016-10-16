import * as memorycache from  "./memory-cache"
import * as memory      from  "./memory"

let iterations = 50000
memorycache.run (iterations)
memory.run      (iterations)
