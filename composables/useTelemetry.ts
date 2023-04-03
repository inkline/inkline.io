import posthog from 'posthog-js';
import type { Properties } from 'posthog-js';

export type TelemetryEventName = string;
export type TelemetryEventProperties = Properties;

export function useTelemetry() {
    const analytics = typeof window !== 'undefined' ? posthog : undefined;

    function track(eventName: TelemetryEventName, properties?: TelemetryEventProperties) {
        if (!analytics) {
            return;
        }

        analytics.capture(eventName, properties);
    }

    return { track };
}
