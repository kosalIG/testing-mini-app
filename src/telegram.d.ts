declare global {
    interface Window {
      Telegram: {
        WebApp: {
          ready: () => void;
          expand: () => void;
          close: () => void;
          setBackgroundColor: (color: string) => void;
          hideHeader: () => void;
          setTitle: (title: string) => void;
          initDataUnsafe: any; // Or a more specific type based on your use case
        };
      };
    }
  }
  