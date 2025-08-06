import process from "node:process";
import { Command, Option } from "commander";

let mode = "dev";
const program = new Command();

program
  .addOption(new Option("--test <archivo>", "Archivo de test a ejecutar"))
  .addOption(
    new Option("-m, --mode <MODE>", "Modo de ejecución del server")
      .choices(["prod", "dev"])
      .default("dev")
  );

program.parse();

mode = program.opts().mode;

process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

const config = {
  MONGO_URI: process.env.MONGO_URI,
  MODE: mode,
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};

export default config;
