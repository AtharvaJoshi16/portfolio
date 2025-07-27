export const sendEvent = ({
  action,
  label,
}: {
  action: string;
  label?: string;
}) => {
  if (typeof window !== undefined && window.gtag) {
    window.gtag("event", action, {
      event_label: label,
    });
  }
};
