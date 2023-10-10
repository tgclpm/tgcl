/**
 * Объявляем известные переменные окружения.
 * Включает автозаполнение при использовании "process.env.".
 * Облегчает поиск переменных окружения и помогает избежать опечаток.
 *
 * Переменные env, не указанные в списке, по-прежнему можно будет использовать.
 *
 * @см https://stackoverflow.com/a/53981706/2391795
 */
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_BASE_PATH: string;
            NODE_ENV: 'development' | 'production';
            NEXT_PUBLIC_APP_BUILD_ID: string;
            NEXT_PUBLIC_APP_NAME: string;
            NEXT_PUBLIC_APP_NAME_VERSION: string;
            NEXT_PUBLIC_APP_VERSION_RELEASE: string;
            NEXT_PUBLIC_APP_STAGE: 'test' | 'development' | 'staging' | 'production';
            NEXT_PUBLIC_SWITCHERE_STAGE: 'development' | 'production';
            NEXT_PUBLIC_APP_BUILD_TIME: string;
            NEXT_PUBLIC_APP_BUILD_TIMESTAMP: string;
            NEXT_PUBLIC_SENTRY_DSN: string;
            SENTRY_AUTH_TOKEN: string;
            NEXT_PUBLIC_ORIGIN: string;
            NEXT_PUBLIC_SUPPORT_MAIL: string;
            NEXT_PUBLIC_RECAPTCHA: string;
            NEXT_PUBLIC_RECAPTCHA_V2: string;

            // Git env variables
            GIT_COMMIT_SHA_SHORT: string;
            GIT_COMMIT_SHA: string;
            GIT_COMMIT_REF: string;
            GIT_COMMIT_TAGS: string;

            // Vendor env variables
            AWS_EXECUTION_ENV: string;
            AWS_LAMBDA_FUNCTION_MEMORY_SIZE: string;
            AWS_REGION: string;

            // Other
            REDIS_URL: string;
            FILE_SERVICE_USERNAME: string;
            FILE_SERVICE_PASSWORD: string;
            TZ: string; // TimeZone (":UTC")
        }
    }
}

// Трюк, чтобы сделать этот модуль валидным:
export {};
