type LogLevel = "debug" | "info" | "warn" | "error";

const logLevel: LogLevel = (process.env.LOG_LEVEL as LogLevel) || "info";

const levels: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

function shouldLog(level: LogLevel): boolean {
  return levels[level] >= levels[logLevel];
}

export const logger = {
  debug: (obj: object, msg?: string) => {
    if (shouldLog("debug")) console.debug(msg || "", obj);
  },
  info: (obj: object, msg?: string) => {
    if (shouldLog("info")) console.info(msg || "", obj);
  },
  warn: (obj: object, msg?: string) => {
    if (shouldLog("warn")) console.warn(msg || "", obj);
  },
  error: (obj: object, msg?: string) => {
    if (shouldLog("error")) console.error(msg || "", obj);
  },
};
