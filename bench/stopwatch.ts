declare var process: any;

/**
 * formats bytes into human readable form.
 * @Param {number} the number of bytes
 * @returns {string}
 */
function formatSizeUnits(bytes: number):string{
      let out = ''
      if      (bytes>=1073741824) {out=(bytes/1073741824).toFixed(2)+' GB';}
      else if (bytes>=1048576)    {out=(bytes/1048576).toFixed(2)+' MB';}
      else if (bytes>=1024)       {out=(bytes/1024).toFixed(2)+' KB';}
      else if (bytes>1)           {out=bytes+' bytes';}
      else if (bytes==1)          {out=bytes+' byte';}
      else                        {out='0 byte';}
      return out;
}
/**
 * formats (pads out) the given string.
 * @Param {string} the string to format.
 * @param {number} the total length being padded.
 * @returns {string}
 */
function format(input: string, total: number): string {
  let diff = total - input.length
  let buff = ''
  for(let i = 0; i < diff; i++) buff += ' '
  return [input, buff].join('')
}

/**
 * runs the given function, and writes the elapsed time to stdout.
 * @param {string} the reason for running this stopwatch.
 * @param {Function} the function to run.
 * @returns {void}
 */
export function stopwatch(message: string, func: () => void) : void {
  process.stdout.write(format("  " + message, 22))
  let start = new Date()
  func()
  let end = new Date()
  let mem = process.memoryUsage()
  process.stdout.write(" - elapsed: " + format((end.getTime() - start.getTime()).toString() + "ms", 8) + " heap: " + formatSizeUnits(mem.heapTotal) + "  used: " + formatSizeUnits(mem.heapUsed) + "\n")
}