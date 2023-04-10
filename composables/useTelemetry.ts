import type { Properties } from 'posthog-js';
import { getPostHog } from '~/plugins/posthog';

export type TelemetryEventName = string;
export type TelemetryEventProperties = Properties;

export function useTelemetry() {
    function track(eventName: TelemetryEventName, properties?: TelemetryEventProperties) {
        const analytics = getPostHog();
        if (!analytics) {
            return;
        }

        analytics.capture(eventName, properties);
    }

    return { track };
}
