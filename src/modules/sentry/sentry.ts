import * as Sentry from '@sentry/nextjs';

/**
 * Инициализирует Sentry и экспортирует его.
 *
 * Помощник, позволяющий избежать дублирования вызова init() в каждом файле /pages/api.
 * Также используется в pages/_app для клиентской стороны, что автоматически применяет его ко всем страницам внешнего интерфейса.
 *
 * Не инициализирует Sentry, если SENTRY_DSN не определен
 *
 * @см https://www.npmjs.com/package/@sentry/node
 */
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
        debug: false,
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.2,
        attachStacktrace: true,
        enabled: process.env.NODE_ENV !== 'test',
        environment: process.env.NEXT_PUBLIC_APP_STAGE,
        release: process.env.NEXT_PUBLIC_APP_VERSION_RELEASE,
    });

    if (!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV !== 'test') {
        // eslint-disable-next-line no-console
        console.error('Sentry DSN not defined');
    }

    // Область действия настроена по умолчанию, последующие вызовы "configureScope" добавят дополнительные данные
    Sentry.configureScope(scope => {
        scope.setTag('appStage', process.env.NEXT_PUBLIC_APP_STAGE);
        scope.setTag('appName', process.env.NEXT_PUBLIC_APP_NAME);
        scope.setTag('appVersion', process.env.NEXT_PUBLIC_APP_VERSION);
        scope.setTag('appNameVersion', process.env.NEXT_PUBLIC_APP_NAME_VERSION);
        scope.setTag('appBuildTime', process.env.NEXT_PUBLIC_APP_BUILD_TIME);
        scope.setTag('buildTimeISO', new Date(process.env.NEXT_PUBLIC_APP_BUILD_TIME || '').toISOString());
        scope.setTag('appBuildId', process.env.NEXT_PUBLIC_APP_BUILD_ID);
    });
}
export default Sentry;
