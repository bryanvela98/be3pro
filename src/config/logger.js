import winston from "winston";
import path from "path";
import __dirname from "../utils/index.js";
import config from "./config.js";
const { MODE } = config;

// Personalized levels
const customLevels = {
  levels: {
    grave: 0, // Critical errors (written to file)
    warn: 1, // Warnings
    info: 2, // General info
    leve: 3, // Detailed debug-level messages
  },
  colors: {
    grave: "red",
    warn: "yellow",
    info: "blue",
    leve: "green",
  },
};

winston.addColors(customLevels.colors);

// Transport for grave errors to file
const transportFile = new winston.transports.File({
  level: "grave",
  filename: path.join(__dirname, "logs", "grave.log"),
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

// Transport for all development levels to console
const transportConsole = new winston.transports.Console({
  level: "leve",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ timestamp, level, message, ...rest }) => {
      const meta = rest.meta ? JSON.stringify(rest.meta) : "";
      return `[${timestamp}] ${level}: ${message} ${meta}`;
    })
  ),
});

// Logger Instance
const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [transportFile],
});

// Add to the development console
if (MODE === "development") {
  logger.add(transportConsole);
}

// Middleware for Express
const middLogg = (req, res, next) => {
  req.logger = logger;
  next();
};

export default middLogg;
