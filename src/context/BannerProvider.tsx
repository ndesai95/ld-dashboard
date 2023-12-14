import { ReactElement, useEffect, useMemo, useState } from "react";

import { BannerContext, BannerVariant } from "@/context/BannerContext";

export const BannerProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<BannerVariant>(BannerVariant.success);
  const [_timer, setTimer] = useState<number>(0);
  useEffect(() => {
    let isStillMounted = true;
    if (message) {
      setTimer((oldTimer) => {
        window.clearTimeout(oldTimer);
        return window.setTimeout(() => {
          if (isStillMounted) {
            setMessage("");
            setTimer(0);
          }
        }, 3000);
      });
    }
    return () => {
      isStillMounted = false;
    };
  }, [message]);

  const memoizedValue = useMemo(() => {
    return {
      message,
      setMessage: (newMessage: string, newVariant?: BannerVariant) => {
        setMessage(newMessage);
        setVariant(newVariant || BannerVariant.success);
      },
      variant,
    };
  }, [message, variant]);

  return (
    <BannerContext.Provider value={memoizedValue}>
      {children}
    </BannerContext.Provider>
  );
};
