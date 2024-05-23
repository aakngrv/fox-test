import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const DEFAULT_PORT = 3333;

export interface UploaderConfig {
  environment: any;
  uploadDirectory: any;
  serveRoot: any;
  port: number;
}

export default registerAs('application', (): UploaderConfig => {
  const config: UploaderConfig = {
    serveRoot: process.env['SERVE_ROOT'],
    environment: process.env['NODE_ENV'],
    uploadDirectory: process.env['UPLOAD_DIRECTORY_PATH'],
    port: parseInt(process.env['PORT'] || DEFAULT_PORT.toString(), 10),
  };

  const validationSchema = Joi.object<UploaderConfig>({
    serveRoot: Joi.string().required(),
    environment: Joi.string()
      .valid('development', 'production', 'stage'),
    port: Joi.number()
      .port()
      .default(DEFAULT_PORT),
    uploadDirectory: Joi.string()
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Uploader Config]: Environments validation failed. Please check .env file.
       Error message: ${error.message}`,
    );
  }

  return config;
});