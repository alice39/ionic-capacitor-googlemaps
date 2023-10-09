## Minimal reproducible code

Before running this, a Google Maps API Key should be inserted in

- `android/app/src/main/AndroidManifest.xml`
- `src/app/home/home.page.ts`

Replace the `API_KEY_KERE` for the Google Maps API Key

Build and sync for Android:
1. `ionic build`
2. `npx cap sync android`

When running the app, test toggling dark mode in Android system.